import { MailService } from '@sendgrid/mail';

// Initialize the mail service with API key
const mailService = new MailService();
mailService.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY || process.env.SENDGRID_API_KEY);

/**
 * Send an email using SendGrid
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text email content
 * @param {string} options.html - HTML email content
 * @returns {Promise<boolean>} - Success status
 */
export async function sendEmail(options) {
  try {
    // Set the from email (should be verified in SendGrid)
    const emailData = {
      to: options.to,
      from: 'appointments@drgasah.com', // Replace with your verified sender
      subject: options.subject,
      text: options.text,
      html: options.html || options.text
    };

    await mailService.send(emailData);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send a booking confirmation email
 * @param {Object} booking - Booking details
 * @returns {Promise<boolean>} - Success status
 */
export async function sendBookingConfirmation(booking) {
  const to = 'michaeltaye012@gmail.com'; // Admin email
  const subject = `New Appointment: ${booking.patientName} - ${booking.service}`;
  
  const text = `
New appointment request:

Patient: ${booking.patientName}
Email: ${booking.email}
Phone: ${booking.phone}
Service: ${booking.service}
Preferred Date: ${booking.date}
Time: ${booking.time}
Message: ${booking.message || 'No additional message'}

Please confirm this appointment with the patient.
`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #3b57f5; color: white; padding: 10px 20px; border-radius: 5px 5px 0 0; }
    .content { border: 1px solid #ddd; border-top: none; padding: 20px; border-radius: 0 0 5px 5px; }
    .footer { margin-top: 20px; font-size: 12px; color: #777; }
    .detail { margin-bottom: 10px; }
    .label { font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Appointment Request</h2>
    </div>
    <div class="content">
      <div class="detail"><span class="label">Patient:</span> ${booking.patientName}</div>
      <div class="detail"><span class="label">Email:</span> ${booking.email}</div>
      <div class="detail"><span class="label">Phone:</span> ${booking.phone}</div>
      <div class="detail"><span class="label">Service:</span> ${booking.service}</div>
      <div class="detail"><span class="label">Preferred Date:</span> ${booking.date}</div>
      <div class="detail"><span class="label">Time:</span> ${booking.time}</div>
      <div class="detail"><span class="label">Message:</span> ${booking.message || 'No additional message'}</div>
    </div>
    <div class="footer">
      <p>Please confirm this appointment with the patient.</p>
      <p>Dr. Gasah A - Pediatric Hematology Oncologist</p>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({ to, subject, text, html });
}