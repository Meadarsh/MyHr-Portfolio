import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request:any) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'myhrexpert19@gmail.com',
        pass: 'wyub kmpl fzrm dvxs',
      },
    });

    const mailOptions = {
      from: 'myhrexpert19@gmail.com',
      to: 'pachauri.abhishek1703@gmail.com',
      subject: 'New Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="text-align: center; color: #0077b6;">New Form Submission</h2>
          <p style="font-size: 16px; color: #555;">
            You have received a new form submission with the following details:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f0f8ff;">
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Field</th>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Details</th>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">Company</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px;">Requirements</td>
              <td style="padding: 10px;">${data.requirements}</td>
            </tr>
          </table>
          <p style="font-size: 14px; color: #555; margin-top: 20px;">
            Regards, <br/> Your Company Team
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Form submitted and email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: 'Form submission failed' }, { status: 500 });
  }
}
