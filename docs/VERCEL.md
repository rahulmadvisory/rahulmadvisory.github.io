# Vercel Deployment Guide

## Quick Start

Your portfolio is configured to deploy automatically to Vercel when you push changes to GitHub.

### Project Configuration
- **Project Root:** `src`
- **Build Command:** `next build --turbopack`
- **Output Directory:** `.next`

## Environment Variables

### Contact Form (Optional)

If you want to **enable the contact form** on your portfolio:

1. In Vercel Dashboard → Project Settings → Environment Variables, add:

| Variable | Value | Required | Notes |
|----------|-------|----------|-------|
| `NEXT_PUBLIC_ENABLE_CONTACT_FORM` | `true` | Yes (to enable form) | Set to enable the contact form UI |
| `SMTP_HOST` | Your SMTP host | If form enabled | e.g., `smtp.sendgrid.net` |
| `SMTP_PORT` | Your SMTP port | If form enabled | e.g., `587` |
| `SMTP_USER` | Your SMTP username | If form enabled | e.g., `apikey` |
| `SMTP_PASS` | Your SMTP password/API key | If form enabled | Store securely in Vercel |
| `CONTACT_RECIPIENT` | Your email address | If form enabled | Emails will be sent here |

### If You Don't Use the Contact Form

Leave `NEXT_PUBLIC_ENABLE_CONTACT_FORM` unset (or `false`). Visitors will see your email and LinkedIn profile instead.

---

## Step-by-Step Deployment

### 1. Confirm Vercel is Connected
- [ ] Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- [ ] Select your project
- [ ] Verify **Project Root** is set to `src` (Settings → General → Project Root)

### 2. (Optional) Add Environment Variables
- [ ] If enabling the contact form:
  - [ ] Settings → Environment Variables
  - [ ] Add the SMTP variables from the table above
  - [ ] Set scope to **Production** and **Preview**

### 3. Deploy
- [ ] Push your latest changes to GitHub:
  ```powershell
  cd c:\Users\rahul\Desktop\portfolio-website\rmportfolio
  git add .
  git commit -m "Add deployment config and env template"
  git push
  ```
- [ ] Vercel will automatically start building (watch Deployments tab)

### 4. Monitor Build
- [ ] In Vercel → Deployments, watch the build logs
- [ ] If errors occur, copy the error message and debug

### 5. Test Production
- [ ] Once deployed, open your project URL (e.g., `https://your-project.vercel.app`)
- [ ] Hard refresh (Ctrl+F5) to clear browser cache
- [ ] If contact form is enabled, test the form submission

---

## Troubleshooting

### Build Fails
- **Check logs:** Deployments → [Failed Build] → Build Logs
- **Common issues:**
  - Missing environment variables (check Vercel Settings)
  - Node version mismatch (Vercel auto-detects; override if needed in Settings → Functions)
  - TypeScript errors (run `npm run build` locally first)

### Contact Form Not Working
- **Check:** Is `NEXT_PUBLIC_ENABLE_CONTACT_FORM=true`?
- **SMTP credentials wrong?** Test locally with `.env.local`:
  ```
  NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
  SMTP_HOST=...
  SMTP_PORT=...
  SMTP_USER=...
  SMTP_PASS=...
  CONTACT_RECIPIENT=...
  ```
  Then run `npm run dev` and test.
- **View logs:** Vercel → Deployments → [Current] → Functions → `/api/contact` → Logs

### Static Assets Return 404
- Ensure `public/` folder and image assets are in the repo
- Check that Next.js compiled correctly (`.next` folder has `static/` subdirectory)

---

## Local Testing Before Deploy

```powershell
# Build locally to catch errors early
cd src
npm run build
npm run start   # Serves production build at http://localhost:3000
```

Then test in your browser before pushing to GitHub.

---

## Additional Resources
- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Nodemailer Documentation](https://nodemailer.com/about/)
- [SendGrid SMTP Integration](https://sendgrid.com/docs/for-developers/sending-email/integrating-with-the-sendgrid-v3-mail-send-api/)
