# Contact Form Setup Guide

Your portfolio now has a fully functional contact form! Here's how it works and how to set it up:

## 🎯 Current Setup: EmailJS (Recommended)

The contact form is currently configured to use **EmailJS**, which is perfect for static sites and doesn't require any server configuration.

### ✅ What's Already Working:
- EmailJS is installed and configured
- Contact form sends emails to: `sheharzad.salahuddin9000@outlook.com`
- Success/error messages are displayed
- Form validation is in place

### 📧 How People Will Contact You:

1. **Contact Page**: Visitors fill out the form on `/contact`
2. **Hire Me Modal**: Quick project requests via the floating button
3. **Direct Email**: They can also email you directly at `sheharzad.salahuddin9000@outlook.com`

### 🔧 EmailJS Configuration (Already Set):
```javascript
const serviceId = 'service_f6m0myb';
const templateId = 'template_2iz1ofn';
const publicKey = 'cyhAdV4SulzwmwCXd';
```

## 🚀 Alternative: API Route Setup

If you prefer server-side email handling, you can use the API route approach:

### 1. Create Environment Variables
Create a `.env.local` file in your project root:
```env
EMAIL_USER=sheharzad.salahuddin9000@outlook.com
EMAIL_PASS=your_email_password_or_app_password
```

### 2. Configure Email Service
- **Outlook**: Use your regular password or generate an app password
- **Gmail**: Generate an app password (don't use your regular password)

### 3. Update ContactForm.jsx
Replace the EmailJS code with API calls:
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 📋 Form Fields

### Contact Form:
- **Name**: Required
- **Email**: Required, validated format
- **Subject**: Required, flexible for any type of inquiry
- **Message**: Required, detailed project description

### Hire Me Modal:
- **Name**: Required
- **Email**: Required
- **Project Type**: Dropdown (Web App, Mobile App, UI/UX, Branding)
- **Message**: Required, project details

## 🎨 User Experience Features

- ✅ **Real-time validation**
- ✅ **Loading states** with spinner
- ✅ **Success/error messages** with auto-dismiss
- ✅ **Form reset** after successful submission
- ✅ **Responsive design** for all devices
- ✅ **Accessibility** with proper labels and ARIA attributes

## 📊 Email Template

Emails sent to you will include:
- Sender's name and email
- Subject line
- Detailed message
- Timestamp and source (portfolio website)

## 🔒 Security & Privacy

- ✅ **Client-side validation**
- ✅ **Server-side validation** (API route)
- ✅ **EmailJS security** (public keys are safe to expose)
- ✅ **No data storage** - emails go directly to your inbox

## 🚀 Testing

1. Fill out the contact form on your website
2. Check your email: `sheharzad.salahuddin9000@outlook.com`
3. Verify the email content and formatting
4. Test error scenarios (network issues, invalid email, etc.)

## 💡 Tips

- **Monitor your EmailJS dashboard** for delivery status
- **Set up email filters** to organize portfolio inquiries
- **Consider auto-replies** for immediate acknowledgment
- **Backup important emails** to avoid losing inquiries

Your contact form is now fully functional and ready to receive inquiries from potential clients and collaborators! 🎉
