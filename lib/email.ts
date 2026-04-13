import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendMagicLinkParams {
  email: string
  name: string
  magicLink: string
}

export async function sendMagicLinkEmail({ email, name, magicLink }: SendMagicLinkParams) {
  const { data, error } = await resend.emails.send({
    from: 'Generation AI <noreply@generation-ai.org>',
    to: email,
    subject: 'Willkommen bei Generation AI! 🚀',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 480px; background-color: #141414; border-radius: 16px; border: 1px solid #262626;">
          <tr>
            <td style="padding: 40px 32px;">
              <!-- Logo/Header -->
              <div style="text-align: center; margin-bottom: 32px;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff;">
                  Generation <span style="color: #22c55e;">AI</span>
                </h1>
              </div>

              <!-- Content -->
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 600; color: #ffffff;">
                Hey ${name}! 👋
              </h2>

              <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #a3a3a3;">
                Willkommen bei der ersten kostenlosen KI-Community für Studierende im DACH-Raum. Klick auf den Button um dich einzuloggen:
              </p>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 32px 0;">
                <a href="${magicLink}" style="display: inline-block; padding: 16px 32px; background-color: #22c55e; color: #000000; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 9999px;">
                  Einloggen
                </a>
              </div>

              <p style="margin: 24px 0 0 0; font-size: 14px; line-height: 1.6; color: #737373;">
                Der Link ist 24 Stunden gültig. Falls du dich nicht angemeldet hast, ignoriere diese Email einfach.
              </p>

              <!-- Divider -->
              <hr style="margin: 32px 0; border: none; border-top: 1px solid #262626;">

              <!-- Footer -->
              <p style="margin: 0; font-size: 12px; color: #525252; text-align: center;">
                Generation AI · Die KI-Community für Studierende
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    throw error
  }

  return data
}
