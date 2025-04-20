import { json } from '@sveltejs/kit';
import { sendBookingConfirmation } from '$lib/utils/sendEmail.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    // Parse the request body
    const booking = await request.json();
    
    // Validate required fields
    const requiredFields = ['patientName', 'email', 'phone', 'service', 'date', 'time'];
    const missingFields = requiredFields.filter(field => !booking[field]);
    
    if (missingFields.length > 0) {
      return json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      }, { status: 400 });
    }
    
    // Send email notification
    const emailSent = await sendBookingConfirmation(booking);
    
    if (!emailSent) {
      return json({
        success: false,
        message: 'Failed to send email notification. Please try again later.'
      }, { status: 500 });
    }
    
    // Return success response
    return json({
      success: true,
      message: 'Booking request received. We will contact you to confirm your appointment.'
    });
  } catch (error) {
    console.error('Booking error:', error);
    return json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    }, { status: 500 });
  }
}