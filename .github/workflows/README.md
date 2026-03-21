# Deploy React Site to GitHub Pages

This workflow automatically builds and deploys your React application to GitHub Pages.

## How It Works

1. **Trigger**: Automatically runs on every push to the `main` branch
2. **Build**: Installs dependencies and builds your React app with Vite
3. **Deploy**: Uploads the `dist` folder to GitHub Pages

## Setup Instructions

### 1. Push this configuration to GitHub
```bash
git add .
git commit -m "Add GitHub Actions workflow for Pages deployment"
git push origin main
```

### 2. Configure GitHub Pages (IMPORTANT)
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select: **GitHub Actions** 
4. Save settings

> ⚠️ **Important**: Since your repo is public, anyone can access your site once deployed.

### 3. Wait for Deployment
- After pushing, go to **Actions** tab in your repository
- You'll see the workflow running
- Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Adding New Pages

Simply add new `*Page.tsx` files to the `/pages` folder:

```tsx
// pages/AboutPage.tsx
import React from 'react'

export default function AboutPage() {
  return <div>About Us</div>
}
```

The page will be automatically available at: `/about`

**Example from your project:**
- File: `pages/SoporteenEspañolparaViajerosporAsíaPage.tsx`
- URL: `/soporte-en-español-para-viajeros-por-asía`

## Manual Trigger

You can manually trigger a deployment:
1. Go to **Actions** tab
2. Select "Deploy React Site to GitHub Pages" workflow
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## Environment Variables

If you need environment variables:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add your secrets
3. Reference them in the workflow using `${{ secrets.YOUR_SECRET }}`

## Troubleshooting

### Build fails?
- Check that all dependencies are in `package.json`
- Run `npm run build` locally to test

### 404 on pages?
- Make sure files are named `*Page.tsx`
- Check the filename follows camelCase convention

### Site not updating?
- Clear browser cache or do a hard refresh (Ctrl+Shift+R)
- Check Actions tab for failed deployments
