import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type { TransportOptions } from 'nodemailer';

interface SMTPError extends Error {
    code?: string;
    command?: string;
}

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        // Log environment variables (without exposing sensitive data)
        console.log('Environment check:', {
            SMTP_USER: process.env.SMTP_USER ? 'Set' : 'Not set',
            SMTP_PASSWORD: process.env.SMTP_PASSWORD ? 'Set' : 'Not set',
            NODE_ENV: process.env.NODE_ENV,
            PWD: process.env.PWD
        });

        console.log('Creating SMTP transport...');
        
        // Create a transporter with Office 365 SMTP settings
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            connectionTimeout: 30000, // 30 seconds
            greetingTimeout: 30000,   // 30 seconds
            socketTimeout: 30000,     // 30 seconds
            debug: true,
            logger: true
        } as TransportOptions);

        console.log('Verifying SMTP connection...');
        
        // Verify connection configuration
        await transporter.verify();
        
        console.log('SMTP connection verified, sending email...');

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'sales@northshirekitchens.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
            `,
            html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<h3>Message:</h3>
<p>${message}</p>
            `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

        return NextResponse.json({ success: true });
    } catch (error) {
        // Detailed error logging
        const smtpError = error as SMTPError;
        console.error('Error details:', {
            name: smtpError.name,
            message: smtpError.message,
            code: smtpError.code,
            command: smtpError.command,
            stack: smtpError.stack,
            env: {
                SMTP_USER: process.env.SMTP_USER ? 'Set' : 'Not set',
                SMTP_PASSWORD: process.env.SMTP_PASSWORD ? 'Set' : 'Not set',
                NODE_ENV: process.env.NODE_ENV
            }
        });
        
        return NextResponse.json(
            { error: 'Failed to send message', details: smtpError.message },
            { status: 500 }
        );
    }
} 