import os
import smtplib
from email.message import EmailMessage
from flask import Flask, jsonify, request

# Configuration from environment variables
SMTP_HOST = os.getenv("SMTP_HOST", "localhost")
SMTP_PORT = int(os.getenv("SMTP_PORT", "25"))
SMTP_USER = os.getenv("SMTP_USER")  # optional
SMTP_PASS = os.getenv("SMTP_PASS")  # optional
MAIL_TO = os.getenv("MAIL_TO", "sales@northshirekitchens.com")
MAIL_FROM = os.getenv("MAIL_FROM", MAIL_TO)

app = Flask(__name__)


def send_mail(name: str, email: str, phone: str, message: str) -> None:
    """Construct and send email via SMTP."""
    subject = f"New Contact Request from {name}"

    body = (
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Phone: {phone}\n\n"
        f"Message:\n{message}"
    )

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = MAIL_FROM
    msg["To"] = MAIL_TO
    msg.set_content(body)

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        if SMTP_USER and SMTP_PASS:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)


@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json(force=True)
    # Basic validation
    for field in ["name", "email", "phone", "message"]:
        if field not in data:
            return jsonify({"error": f"{field} is required"}), 400

    try:
        send_mail(
            name=data["name"],
            email=data["email"],
            phone=data["phone"],
            message=data["message"],
        )
        return jsonify({"status": "ok"}), 200
    except Exception as exc:
        # Log error (stdout will go to passenger logs)
        app.logger.exception("Failed to send email")
        return jsonify({"error": str(exc)}), 500


if __name__ == "__main__":
    # Local development
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)))

