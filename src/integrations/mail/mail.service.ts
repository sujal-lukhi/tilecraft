import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

export interface EnquiryMailData {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  siteVisitDate?: string;
  message?: string;
  createdAt?: string | Date;
}

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: nodemailer.Transporter | null = null;
  private adminEmail: string;

  constructor() {
    this.adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'tilecraftinteriors1@gmail.com';
    this.initTransporter();
  }

  private initTransporter() {
    const user = process.env.SMTP_USER || process.env.GMAIL_USER || 'tilecraftinteriors1@gmail.com';
    const rawPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD || 'qrygyscbygfumazv';
    const pass = rawPass.replace(/\s+/g, '');

    try {
      this.transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user,
          pass,
        },
      });
      this.logger.log(`📧 Mail service configured for Gmail SMTP with sender: ${user}`);
    } catch (err: any) {
      this.logger.error(`❌ Mail transporter initialization failed: ${err.message}`);
    }
  }

  /**
   * Send instant notification to tilecraftinteriors1@gmail.com when a customer submits an enquiry
   */
  async sendNewEnquiryAlertToAdmin(enquiry: EnquiryMailData): Promise<boolean> {
    const cleanPhone = enquiry.phone.replace(/[^0-9+]/g, '');
    const dateFormatted = enquiry.siteVisitDate ? new Date(enquiry.siteVisitDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) : 'Not specified (Flexible)';

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0a09; color: #f5f5f4; margin: 0; padding: 24px; }
        .container { max-width: 600px; margin: 0 auto; background: #1c1917; border-radius: 16px; border: 1px solid #44403c; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
        .header { background: linear-gradient(135deg, #1c1917 0%, #292524 100%); padding: 32px 24px; border-bottom: 2px solid #b45309; text-align: center; }
        .badge { display: inline-block; padding: 6px 14px; background: rgba(217, 119, 6, 0.15); border: 1px solid #d97706; border-radius: 9999px; color: #fbbf24; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; }
        .title { color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; }
        .content { padding: 28px 24px; }
        .card { background: #292524; border-radius: 12px; border: 1px solid #44403c; padding: 20px; margin-bottom: 20px; }
        .field-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #383431; }
        .field-row:last-child { border-bottom: none; }
        .field-label { color: #a8a29e; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .field-value { color: #ffffff; font-size: 14px; font-weight: 600; text-align: right; }
        .message-box { background: #171514; border-left: 3px solid #f59e0b; padding: 14px 16px; border-radius: 6px; margin-top: 16px; color: #e7e5e4; font-size: 14px; line-height: 1.5; font-style: italic; }
        .btn-group { display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; }
        .btn { display: inline-block; padding: 12px 20px; border-radius: 9999px; text-decoration: none; font-weight: 700; font-size: 13px; text-align: center; flex: 1; min-width: 130px; }
        .btn-whatsapp { background: #16a34a; color: #ffffff !important; }
        .btn-call { background: #0284c7; color: #ffffff !important; }
        .btn-reply { background: #d97706; color: #ffffff !important; }
        .footer { background: #171514; padding: 20px; text-align: center; color: #78716c; font-size: 12px; border-top: 1px solid #292524; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <span class="badge">✨ New Customer Enquiry</span>
          <h1 class="title">Tilecraft Interiors Booking Alert</h1>
        </div>
        <div class="content">
          <div class="card">
            <table width="100%" cellpadding="8" cellspacing="0">
              <tr>
                <td style="color: #a8a29e; font-size: 13px; font-weight: 600;">CUSTOMER NAME</td>
                <td style="color: #ffffff; font-size: 15px; font-weight: 700; text-align: right;">${enquiry.fullName}</td>
              </tr>
              <tr>
                <td style="color: #a8a29e; font-size: 13px; font-weight: 600;">SERVICE REQUESTED</td>
                <td style="color: #fbbf24; font-size: 14px; font-weight: 700; text-align: right;">${enquiry.serviceType}</td>
              </tr>
              <tr>
                <td style="color: #a8a29e; font-size: 13px; font-weight: 600;">PHONE NUMBER</td>
                <td style="color: #38bdf8; font-size: 14px; font-weight: 700; text-align: right;"><a href="tel:${cleanPhone}" style="color: #38bdf8; text-decoration: none;">${enquiry.phone}</a></td>
              </tr>
              <tr>
                <td style="color: #a8a29e; font-size: 13px; font-weight: 600;">EMAIL ADDRESS</td>
                <td style="color: #ffffff; font-size: 14px; text-align: right;"><a href="mailto:${enquiry.email}" style="color: #e7e5e4; text-decoration: none;">${enquiry.email}</a></td>
              </tr>
              <tr>
                <td style="color: #a8a29e; font-size: 13px; font-weight: 600;">PREFERRED SITE DATE</td>
                <td style="color: #ffffff; font-size: 14px; text-align: right;">${dateFormatted}</td>
              </tr>
            </table>

            <div style="margin-top: 16px;">
              <span style="color: #a8a29e; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">CLIENT MESSAGE:</span>
              <div class="message-box">
                "${enquiry.message || 'No additional message provided'}"
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <p style="color: #a8a29e; font-size: 13px; margin-bottom: 12px;">⚡ Quick Client Actions:</p>
            <table width="100%" cellpadding="6" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="https://wa.me/${cleanPhone.replace('+', '')}?text=Hello%20${encodeURIComponent(enquiry.fullName)},%20thank%20you%20for%20contacting%20Tilecraft%20Interiors%20regarding%20${encodeURIComponent(enquiry.serviceType)}." style="background: #16a34a; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 9999px; font-weight: 700; font-size: 13px; display: inline-block;">
                    💬 Open WhatsApp
                  </a>
                </td>
                <td align="center">
                  <a href="tel:${cleanPhone}" style="background: #0284c7; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 9999px; font-weight: 700; font-size: 13px; display: inline-block;">
                    📞 Call Client
                  </a>
                </td>
                <td align="center">
                  <a href="mailto:${enquiry.email}?subject=Tilecraft%20Interiors%20-%20Regarding%20Your%20${encodeURIComponent(enquiry.serviceType)}%20Enquiry" style="background: #d97706; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 9999px; font-weight: 700; font-size: 13px; display: inline-block;">
                    ✉️ Reply Email
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="footer">
          <p style="margin: 0 0 6px 0;">Tilecraft Interiors • Luxury Architecture, Tile & Stone Craftsmanship</p>
          <p style="margin: 0; color: #57534e;">Ahmedabad, Gujarat • Notification sent to ${this.adminEmail}</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Log the notification to server console
    this.logger.log(`📬 [ENQUIRY NOTIFICATION] New enquiry from ${enquiry.fullName} (${enquiry.phone}, ${enquiry.email}) for ${enquiry.serviceType} queued for ${this.adminEmail}`);

    if (this.transporter) {
      try {
        const mailOptions: nodemailer.SendMailOptions = {
          from: `"Tilecraft Interiors Booking" <${process.env.SMTP_USER || 'tilecraftinteriors1@gmail.com'}>`,
          to: this.adminEmail,
          replyTo: enquiry.email,
          subject: `✨ New Client Enquiry: ${enquiry.fullName} - ${enquiry.serviceType}`,
          html: htmlContent,
        };

        const result = await this.transporter.sendMail(mailOptions);
        this.logger.log(`✅ Enquiry email successfully delivered to ${this.adminEmail}. MessageId: ${result.messageId}`);
        return true;
      } catch (err: any) {
        this.logger.error(`❌ Failed to send enquiry email via Gmail SMTP: ${err.message}`, err.stack);
        return false;
      }
    } else {
      this.logger.log(`ℹ️ Transporter not configured. Enquiry record saved securely in database.`);
      return true;
    }
  }

  /**
   * Send automatic confirmation email to the customer
   */
  async sendCustomerConfirmation(enquiry: EnquiryMailData): Promise<boolean> {
    if (!this.transporter || !enquiry.email) {
      return false;
    }

    try {
      const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0a09; color: #f5f5f4; margin: 0; padding: 24px; }
          .container { max-width: 580px; margin: 0 auto; background: #1c1917; border-radius: 16px; border: 1px solid #44403c; overflow: hidden; }
          .header { background: #292524; padding: 32px 24px; text-align: center; border-bottom: 2px solid #b45309; }
          .title { color: #ffffff; font-size: 20px; font-weight: 700; margin: 8px 0 0 0; }
          .content { padding: 28px 24px; line-height: 1.6; color: #d6d3d1; }
          .highlight { color: #fbbf24; font-weight: 700; }
          .footer { background: #171514; padding: 20px; text-align: center; color: #78716c; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="title">TILECRAFT INTERIORS</h1>
            <p style="color: #a8a29e; font-size: 12px; margin: 4px 0 0 0; letter-spacing: 2px;">CRAFTED WITH PRECISION</p>
          </div>
          <div class="content">
            <p>Dear <strong style="color: #ffffff;">${enquiry.fullName}</strong>,</p>
            <p>Thank you for reaching out to <strong>Tilecraft Interiors</strong>. We have successfully received your enquiry for <span class="highlight">${enquiry.serviceType}</span>.</p>
            <p>Our master artisan team in Ahmedabad is reviewing your requirements and will connect with you via phone (<strong>${enquiry.phone}</strong>) or WhatsApp shortly to schedule your design consultation and site visit.</p>
            <div style="background: #292524; border-radius: 8px; padding: 16px; margin: 20px 0; border: 1px solid #44403c;">
              <p style="margin: 0; font-size: 13px; color: #a8a29e;">Need immediate assistance?</p>
              <p style="margin: 6px 0 0 0; font-weight: 700; color: #ffffff;">WhatsApp / Call: <a href="tel:+919313684573" style="color: #fbbf24; text-decoration: none;">+91 9313684573</a></p>
            </div>
            <p style="margin-top: 24px;">Warm regards,<br><strong style="color: #ffffff;">The Tilecraft Interiors Team</strong><br><span style="font-size: 12px; color: #a8a29e;">Ahmedabad, Gujarat</span></p>
          </div>
          <div class="footer">
            <p style="margin: 0;">© 2026 Tilecraft Interiors • All rights reserved</p>
          </div>
        </div>
      </body>
      </html>
      `;

      await this.transporter.sendMail({
        from: `"Tilecraft Interiors" <${process.env.SMTP_USER || 'tilecraftinteriors1@gmail.com'}>`,
        to: enquiry.email,
        subject: `✨ We've Received Your Enquiry - Tilecraft Interiors`,
        html: htmlContent,
      });

      this.logger.log(`✅ Confirmation email sent to customer: ${enquiry.email}`);
      return true;
    } catch (err: any) {
      this.logger.warn(`Could not send customer confirmation email: ${err.message}`);
      return false;
    }
  }
}
