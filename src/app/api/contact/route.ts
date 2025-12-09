import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) {
      return NextResponse.json({ error: 'SMTP configuration is missing on the server. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and CONTACT_RECIPIENT.' }, { status: 500 });
    }

    const portNum = Number(SMTP_PORT || 587);
    const secure = portNum === 465;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: portNum,
      secure,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailResult = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: CONTACT_RECIPIENT,
      subject: `Portfolio site contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return NextResponse.json({ ok: true, info: mailResult });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
