import { render } from "@react-email/render";
import React from "react";
import { Resend } from "resend";
import { WaitlistConfirmationEmail } from "~/emails/waitlist-confirmation";
import { env } from "~/env";

// Initialize Resend with API key
const resend = new Resend(env.RESEND_API_KEY);

interface WaitlistEmailData {
	email: string;
	employeeCount?: string;
	hrisSystem?: string;
}

interface ContactFormData {
	name: string;
	email: string;
	company?: string;
	message: string;
}

export async function sendWaitlistThankYouEmail(data: WaitlistEmailData) {
	if (!env.RESEND_API_KEY || !env.FROM_EMAIL) {
		console.warn(
			"Resend API key or FROM_EMAIL not configured, skipping email send",
		);
		return { success: false, message: "Email service not configured" };
	}

	try {
		const emailHtml = await render(
			React.createElement(WaitlistConfirmationEmail, {
				email: data.email,
				employeeCount: data.employeeCount,
				hrisSystem: data.hrisSystem,
			}),
		);

		console.log("Email HTML type:", typeof emailHtml);
		console.log("Email HTML length:", emailHtml?.length);

		const result = await resend.emails.send({
			from: env.FROM_EMAIL,
			to: [data.email],
			subject: "You're on the VerifyHire waitlist",
			html: String(emailHtml),
		});

		console.log("Email sent successfully:", result);
		return { success: true, data: result };
	} catch (error) {
		console.error("Failed to send email:", error);
		return { success: false, error };
	}
}

export async function sendContactFormEmail(data: ContactFormData) {
	if (!env.RESEND_API_KEY || !env.FROM_EMAIL) {
		console.warn(
			"Resend API key or FROM_EMAIL not configured, skipping email send",
		);
		return { success: false, message: "Email service not configured" };
	}

	try {
		const emailHtml = getContactFormEmailTemplate(data);

		const result = await resend.emails.send({
			from: env.FROM_EMAIL,
			to: ["support@verify.com"], // This will be updated when the domain is ready
			subject: `New Contact Form Submission from ${data.name}`,
			html: emailHtml,
			replyTo: data.email,
		});

		console.log("Contact form email sent successfully:", result);
		return { success: true, data: result };
	} catch (error) {
		console.error("Failed to send contact form email:", error);
		return { success: false, error };
	}
}

// Legacy HTML template - kept for reference but not used
function getWaitlistThankYouEmailTemplate(data: WaitlistEmailData): string {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're on the VerifyHire waitlist</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #000000;
            color: #ffffff;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 32px;
        }
        .logo {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 8px;
        }
        .tagline {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 0;
        }
        .main-content {
            background-color: #0a0a0a;
            border: 1px solid #1a1a1a;
            border-radius: 16px;
            padding: 40px 32px;
            margin-bottom: 24px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }
        .success-icon {
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            border-radius: 50%;
            display: inline-block;
            text-align: center;
            line-height: 56px;
            margin: 0 auto 24px;
            font-size: 28px;
            font-weight: bold;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
        }
        .title {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 8px;
            text-align: center;
            letter-spacing: -0.5px;
        }
        .subtitle {
            font-size: 16px;
            color: #9ca3af;
            text-align: center;
            margin-bottom: 32px;
            line-height: 1.5;
        }
        .email-highlight {
            background: #0d1f0f;
            border: 1px solid #1a3d1f;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 28px;
            text-align: center;
        }
        .email-highlight .email {
            color: #22c55e;
            font-weight: 600;
        }
        .company-info {
            background: #0f0f0f;
            border: 1px solid #1a1a1a;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 24px;
        }
        .company-info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        .company-info-item:last-child {
            margin-bottom: 0;
        }
        .company-info-label {
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
        }
        .company-info-value {
            color: #ffffff;
            font-weight: 500;
        }
        .threat-section {
            background: #1a0f08;
            border: 1px solid #3d1f0a;
            border-radius: 12px;
            padding: 28px;
            margin-bottom: 24px;
        }
        .threat-title {
            color: #f97316;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
            text-align: center;
            letter-spacing: -0.3px;
        }
        .threat-stats {
            display: flex;
            justify-content: space-around;
            margin-bottom: 16px;
        }
        .threat-stat {
            text-align: center;
            flex: 1;
        }
        .threat-stat-number {
            font-size: 24px;
            font-weight: 700;
            color: #f97316;
            display: block;
            margin-bottom: 4px;
        }
        .threat-stat-label {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .threat-description {
            font-size: 15px;
            color: #d1d5db;
            text-align: center;
            margin-bottom: 24px;
            line-height: 1.6;
        }
        .cta-button {
            display: inline-block;
            background: #f97316;
            color: #ffffff !important;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 12px;
            font-weight: 600;
            text-align: center;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;
            border: none;
            box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
            transition: all 0.2s ease;
        }
        .cta-button:hover {
            background: #ea580c;
            box-shadow: 0 6px 16px rgba(249, 115, 22, 0.4);
        }
        .next-steps {
            background: #0f0f0f;
            border: 1px solid #1a1a1a;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 24px;
        }
        .next-steps-title {
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 12px;
        }
        .next-steps-text {
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
        }
        .footer {
            text-align: center;
            color: rgba(255, 255, 255, 0.4);
            font-size: 12px;
            margin-top: 32px;
        }
        .footer-link {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
        }
        .footer-link:hover {
            color: rgba(255, 255, 255, 0.8);
        }
        
        /* Email client compatibility */
        @media only screen and (max-width: 600px) {
            .container {
                padding: 20px 16px;
            }
            .main-content {
                padding: 24px;
            }
            .threat-stats {
                flex-direction: column;
                gap: 16px;
            }
            .threat-stat {
                margin-bottom: 8px;
            }
        }
        
        /* Dark mode styles (always applied) */
        .main-content {
            background: rgba(255, 255, 255, 0.08) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
        }
    </style>
</head>
<body style="background-color: #000000; margin: 0; padding: 0;">
    <!-- Email wrapper table for better email client support -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #000000;">
        <tr>
            <td align="center" style="padding: 0;">
                <div class="container" style="background-color: #000000;">
        <div class="header">
            <div class="logo" style="color: #ffffff;">VerifyHire</div>
            <div class="tagline" style="color: #6b7280;">Employee Verification</div>
        </div>
        
        <div class="main-content" style="background-color: #0a0a0a;">
            <div style="text-align: center;">
                <div class="success-icon">✓</div>
            </div>
            
            <div class="title">You're on the list!</div>
            
            <div class="subtitle">
                Thank you for joining our waitlist. We'll notify you when we're ready for new customers.
            </div>
            
            <div class="email-highlight" style="background: #0d1f0f; border: 1px solid #1a3d1f;">
                <div style="font-size: 14px; color: #9ca3af; margin-bottom: 4px;">Confirmation sent to</div>
                <div class="email" style="color: #22c55e; font-weight: 600;">${data.email}</div>
            </div>
            
            ${
							data.employeeCount || data.hrisSystem
								? `
            <div class="company-info">
                ${
									data.employeeCount
										? `
                <div class="company-info-item">
                    <span class="company-info-label">Company Size</span>
                    <span class="company-info-value">${data.employeeCount}</span>
                </div>
                `
										: ""
								}
                ${
									data.hrisSystem
										? `
                <div class="company-info-item">
                    <span class="company-info-label">Current HRIS</span>
                    <span class="company-info-value">${data.hrisSystem}</span>
                </div>
                `
										: ""
								}
            </div>
            `
								: ""
						}
            
            <div class="threat-section" style="background: #1a0f08; border: 1px solid #3d1f0a;">
                <div class="threat-title" style="color: #f97316;">Understanding the Threat</div>
                
                <div class="threat-stats">
                    <div class="threat-stat">
                        <span class="threat-stat-number">451K+</span>
                        <span class="threat-stat-label">r/Overemployed Members</span>
                    </div>
                    <div class="threat-stat">
                        <span class="threat-stat-number">300+</span>
                        <span class="threat-stat-label">Daily Fraud Posts</span>
                    </div>
                    <div class="threat-stat">
                        <span class="threat-stat-number">$250K</span>
                        <span class="threat-stat-label">Avg. Company Loss</span>
                    </div>
                </div>
                
                <div class="threat-description">
                    The r/overemployed community has over 451,000 members openly sharing tactics to deceive employers. See the problem for yourself.
                </div>
                
                <div style="text-align: center;">
                    <a href="https://reddit.com/r/overemployed" class="cta-button" style="background: #f97316; color: #ffffff !important; text-decoration: none;">
                        Explore the Threat Landscape
                    </a>
                </div>
            </div>
            
            <div class="next-steps">
                <div class="next-steps-title">What's Next?</div>
                <div class="next-steps-text">
                    We'll notify you as soon as VerifyHire is ready for new customers. In the meantime, stay vigilant about dual employment risks in your organization.
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>© 2025 VerifyHire • Protecting companies from dual employment fraud</p>
            <p>This email was sent to ${data.email} because you joined our waitlist.</p>
        </div>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
}

function getWaitlistThankYouEmailText(data: WaitlistEmailData): string {
	return `
You're on the VerifyHire waitlist!

Thank you for joining our waitlist. We'll notify you when we're ready for new customers.

Confirmation sent to: ${data.email}
${data.employeeCount ? `\nCompany Size: ${data.employeeCount}` : ""}
${data.hrisSystem ? `Current HRIS: ${data.hrisSystem}` : ""}

UNDERSTANDING THE THREAT:
- 451K+ r/Overemployed Members
- 300+ Daily Fraud Posts  
- $250K Average Company Loss

The r/overemployed community has over 451,000 members openly sharing tactics to deceive employers. See the problem for yourself.

Explore the threat landscape: https://reddit.com/r/overemployed

WHAT'S NEXT?
We'll notify you as soon as VerifyHire is ready for new customers. In the meantime, stay vigilant about dual employment risks in your organization.

---
© 2025 VerifyHire • Protecting companies from dual employment fraud
This email was sent to ${data.email} because you joined our waitlist.
  `;
}

function getContactFormEmailTemplate(data: ContactFormData): string {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f8fafc;
            color: #1a202c;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 32px;
            text-align: center;
        }
        .header h1 {
            color: white;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
        }
        .content {
            padding: 32px;
        }
        .field {
            margin-bottom: 24px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 16px;
        }
        .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .field-label {
            font-size: 14px;
            font-weight: 600;
            color: #4a5568;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            font-size: 16px;
            color: #2d3748;
            word-wrap: break-word;
        }
        .message-field .field-value {
            background-color: #f7fafc;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            white-space: pre-wrap;
        }
        .footer {
            background-color: #f7fafc;
            padding: 24px 32px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            color: #718096;
            font-size: 14px;
        }
        .reply-button {
            display: inline-block;
            background: #667eea;
            color: white !important;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            margin-top: 16px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>VerifyHire Support</p>
        </div>
        
        <div class="content">
            <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${data.name}</div>
            </div>
            
            <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">${data.email}</div>
            </div>
            
            ${
							data.company
								? `
            <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${data.company}</div>
            </div>
            `
								: ""
						}
            
            <div class="field message-field">
                <div class="field-label">Message</div>
                <div class="field-value">${data.message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>This email was submitted through the VerifyHire contact form.</p>
            <p>Please respond within one business day.</p>
            <a href="mailto:${data.email}" class="reply-button">Reply to ${data.name}</a>
        </div>
    </div>
</body>
</html>
  `;
}
