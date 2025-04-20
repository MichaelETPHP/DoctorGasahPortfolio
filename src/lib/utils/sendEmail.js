import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
    // Default sender email is contact@drgasah.com
    const msg = {
      to: options.to,
      from: 'michaeltaye012@gmail.com', // Use your verified sender
      subject: options.subject,
      text: options.text,
      html: options.html || options.text // Fall back to text if HTML not provided
    };

    await sgMail.send(msg);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

/**
 * Send a booking confirmation email
 * @param {Object} booking - Booking details
 * @returns {Promise<boolean>} - Success status
 */
export async function sendBookingConfirmation(booking) {
  const subject = `Appointment Request: ${booking.patientName} for ${booking.service}`;
  
  // HTML email content
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="background-color: #1e40af; color: white; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">New Appointment Request</h1>
      </div>
      
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; border: 1px solid #e5e7eb;">
        <p style="margin-top: 0;"><strong>Patient Name:</strong> ${booking.patientName}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Service Requested:</strong> ${booking.service}</p>
        <p><strong>Preferred Date:</strong> ${booking.date}</p>
        <p><strong>Preferred Time:</strong> ${booking.time}</p>
        
        ${booking.message ? `<p><strong>Additional Message:</strong> ${booking.message}</p>` : ''}
        
        <p style="background-color: #e0f2fe; padding: 10px; border-radius: 5px; margin-top: 20px;">
          Please contact the patient to confirm this appointment request.
        </p>
      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
        <p>Dr. Gasah A | Pediatric Hematology Oncologist</p>
      </div>
    </div>
  `;
  
  // Plain text version
  const textContent = `
    NEW APPOINTMENT REQUEST
    
    Patient Name: ${booking.patientName}
    Email: ${booking.email}
    Phone: ${booking.phone}
    Service Requested: ${booking.service}
    Preferred Date: ${booking.date}
    Preferred Time: ${booking.time}
    ${booking.message ? `Additional Message: ${booking.message}` : ''}
    
    Please contact the patient to confirm this appointment request.
    
    Dr. Gasah A | Pediatric Hematology Oncologist
  `;
  
  return sendEmail({
    to: 'michaeltaye012@gmail.com', // Replace with your actual email
    subject,
    text: textContent,
    html: htmlContent
  });
}