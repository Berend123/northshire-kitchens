# Northshire Kitchens – Upcoming Fixes

Below is a concise backlog of issues we discovered in production plus the steps required to address each one.  These mirror the TODO items in our task-tracker.

---

## 1  Enable Full SSH (Shell) Access  
_Current status: SFTP-only – no interactive shell, which limits debugging options._

Steps:
1. **cPanel → SSH Access → Manage SSH Keys**  
   • Ensure the new _deploy_key_ is *authorised* (green status).  
   • Click **Enable SSH** if it is still showing as disabled.
2. **Check "Shell access" in GoDaddy account panel** – must be **Bash** (not _Disabled_).
3. Test from local machine:  
   ```powershell
   ssh -i deploy_key u0mfrmz2pvl6@northshirekitchens.com
   ```
   You should land in `/home/u0mfrmz2pvl6` with a normal prompt (`[username@server ~]$`).
4. If the connection is still refused / dropped, open a GoDaddy chat ticket and request:  
   "Please enable interactive SSH for my cPanel user **u0mfrmz2pvl6** on northshirekitchens.com."

---

## 2  Correct the Contact Numbers on the Site  
_Current screenshot shows the numbers swapped / mis-labelled._

Desired result (Afrikaans brief from Marc):
* Top line (**Call Us**): **01609 500070**  
* Second line (can also say **Call Us** or similar): **+44 7561 317660**

Implementation:
1. Update the JSX in `src/components/Footer.tsx` (or wherever the numbers reside).  
2. Re-run `npm run build` to regenerate `out/`.  
3. Upload new files with `rsync` (preserves permissions).

---

## 3  Fix the Contact Form (500 Error)

Root cause: Flask app tries to send email via `localhost:25`; the server has no SMTP daemon.

Actions:
1. Obtain working SMTP credentials (Mailgun / SendGrid / Office365 / Gmail-App-Password).  
2. In **cPanel → Setup Python App → pyapp → Add Variable** set:
   * `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`  
   * `MAIL_FROM` (e.g. `website@northshirekitchens.com`)  
   * `MAIL_TO` (`sales@northshirekitchens.com`)
3. Click **Save** then **Restart**.  
4. Test the form; expect HTTP 200 and confirmation toast.

Optional hardening:
* Log errors to `pyapp/logs/` – add a file handler in `app.py`.
* Add reCAPTCHA v3 to limit spam submissions.

---

## 4  Ensure Google Tag (gtag.js) Is Included

Purpose: enable Google Ads / Analytics measurement via tag ID `AW-16934924944`.

Implementation:
1. Insert the following snippet **once**, inside the `<Head>` component (Next.js) or raw `<head>` of each page:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16934924944"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-16934924944');
</script>
```

2. Recommended location in codebase: `src/app/layout.tsx` – place snippet just before `</head>`.
3. Re-run `npm run build` to regenerate the static `out/` folder and redeploy.
4. After deployment, open View-Source on production and confirm the tag appears; double-check with Google Tag Assistant.

---

_Last updated: {{DATE_PLACEHOLDER}}_ 