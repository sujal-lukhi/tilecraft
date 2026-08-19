const nodemailer = require('nodemailer');

async function testEmail() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tilecraftinteriors1@gmail.com',
      pass: 'qrygyscbygfumazv'
    }
  });

  console.log('Sending test email to tilecraftinteriors1@gmail.com...');

  try {
    const info = await transporter.sendMail({
      from: '"Tilecraft Interiors" <tilecraftinteriors1@gmail.com>',
      to: 'tilecraftinteriors1@gmail.com',
      subject: '✨ Tilecraft Interiors - Email Notification System Connected!',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #1c1917; color: #ffffff; padding: 24px; border-radius: 12px;">
          <h2 style="color: #fbbf24;">🎉 Tilecraft Interiors Email System Active</h2>
          <p>Your Gmail notification system has been successfully connected!</p>
          <p>Whenever a client requests a booking, quotes, or consultation on your website, you will receive full customer details right here.</p>
          <hr style="border: 1px solid #44403c;" />
          <p style="color: #a8a29e; font-size: 12px;">Tilecraft Interiors • Ahmedabad, Gujarat</p>
        </div>
      `
    });

    console.log('SUCCESS! Email sent. Message ID:', info.messageId);
  } catch (err) {
    console.error('FAILED to send email:', err.message);
  }
}

testEmail();