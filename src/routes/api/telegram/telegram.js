import { json } from '@sveltejs/kit'

// You must set TELEGRAM_BOT_TOKEN and TELEGRAM_CHANNEL_ID in your environment
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID

export async function POST({ request }) {
  try {
    const { name, email, phone, message } = await request.json()
    if (!name || !email || !message) {
      return json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHANNEL_ID) {
      return json(
        { success: false, error: 'Telegram not configured' },
        { status: 500 }
      )
    }
    const text = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${
      phone || '-'
    }\nMessage: ${message}`
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    const res = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHANNEL_ID,
        text,
        parse_mode: 'Markdown',
      }),
    })
    if (!res.ok) {
      return json(
        { success: false, error: 'Failed to send to Telegram' },
        { status: 500 }
      )
    }
    return json({ success: true })
  } catch (err) {
    console.error('Telegram API error:', err)
    return json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
