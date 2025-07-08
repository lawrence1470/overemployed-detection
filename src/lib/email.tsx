import { Resend } from 'resend';
import { env } from '~/env';

// Initialize Resend with API key
const resend = new Resend(env.RESEND_API_KEY);

interface WaitlistEmailData {
  email: string;
  employeeCount?: string;
  hrisSystem?: string;
}

export async function sendWaitlistThankYouEmail(data: WaitlistEmailData) {
  if (!env.RESEND_API_KEY || !env.FROM_EMAIL) {
    console.warn('Resend API key or FROM_EMAIL not configured, skipping email send');
    return { success: false, message: 'Email service not configured' };
  }

  try {
    const result = await resend.emails.send({
      from: env.FROM_EMAIL,
      to: [data.email],
      subject: 'Welcome to VerifyHire Waitlist! 🎉',
      html: getWaitlistThankYouEmailTemplate(data),
      text: getWaitlistThankYouEmailText(data),
    });

    console.log('Email sent successfully:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}

function getWaitlistThankYouEmailTemplate(data: WaitlistEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to VerifyHire Waitlist</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #0f0f0f;
            color: #ffffff;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .logo {
            font-size: 32px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 16px;
        }
        .content {
            background: linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(50, 50, 50, 0.4));
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 40px;
            margin-bottom: 30px;
        }
        .title {
            font-size: 28px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 20px;
            text-align: center;
        }
        .text {
            font-size: 16px;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 20px;
        }
        .highlight {
            color: #f97316;
            font-weight: 600;
        }
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #f97316, #ea580c);
            color: white;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-weight: 600;
            text-align: center;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            font-size: 14px;
            margin-top: 40px;
        }
        .stats {
            display: flex;
            justify-content: space-between;
            margin: 30px 0;
            flex-wrap: wrap;
        }
        .stat {
            text-align: center;
            flex: 1;
            margin: 10px;
        }
        .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #f97316;
        }
        .stat-label {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
            text-transform: uppercase;
            margin-top: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">VerifyHire</div>
        </div>
        
        <div class="content">
            <div class="title">You're on the list! 🎉</div>
            
            <p class="text">
                Thank you for joining the VerifyHire waitlist! We're excited to help you tackle the growing challenge of dual employment detection.
            </p>
            
            <p class="text">
                <strong>Your spot is secured at:</strong> <span class="highlight">${data.email}</span>
            </p>
            
            ${data.employeeCount ? `<p class="text"><strong>Company Size:</strong> ${data.employeeCount}</p>` : ''}
            ${data.hrisSystem ? `<p class="text"><strong>Current HRIS:</strong> ${data.hrisSystem}</p>` : ''}
            
            <div class="stats">
                <div class="stat">
                    <div class="stat-number">451K+</div>
                    <div class="stat-label">r/Overemployed Members</div>
                </div>
                <div class="stat">
                    <div class="stat-number">300+</div>
                    <div class="stat-label">Daily Fraud Posts</div>
                </div>
                <div class="stat">
                    <div class="stat-number">$250K</div>
                    <div class="stat-label">Avg. Company Loss</div>
                </div>
            </div>
            
            <p class="text">
                While you wait, feel free to explore the problem we're solving. The r/overemployed community has over 451,000 members openly sharing tactics to deceive employers.
            </p>
            
            <center>
                <a href="https://reddit.com/r/overemployed" class="cta-button">
                    See the Threat for Yourself
                </a>
            </center>
            
            <p class="text">
                We'll notify you as soon as VerifyHire is ready for new customers. In the meantime, stay vigilant!
            </p>
        </div>
        
        <div class="footer">
            <p>© 2025 VerifyHire. Protecting companies from dual employment fraud.</p>
            <p>This email was sent to ${data.email} because you joined our waitlist.</p>
        </div>
    </div>
</body>
</html>
  `;
}

function getWaitlistThankYouEmailText(data: WaitlistEmailData): string {
  return `
Welcome to VerifyHire Waitlist!

Thank you for joining the VerifyHire waitlist! We're excited to help you tackle the growing challenge of dual employment detection.

Your spot is secured at: ${data.email}
${data.employeeCount ? `Company Size: ${data.employeeCount}` : ''}
${data.hrisSystem ? `Current HRIS: ${data.hrisSystem}` : ''}

Key Stats:
- 451K+ r/Overemployed Members
- 300+ Daily Fraud Posts  
- $250K Average Company Loss

While you wait, feel free to explore the problem we're solving. The r/overemployed community has over 451,000 members openly sharing tactics to deceive employers.

Visit: https://reddit.com/r/overemployed

We'll notify you as soon as VerifyHire is ready for new customers. In the meantime, stay vigilant!

---
© 2025 VerifyHire. Protecting companies from dual employment fraud.
This email was sent to ${data.email} because you joined our waitlist.
  `;
}