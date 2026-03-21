# GitHub Pages Deployment Configuration

This repository is configured for automatic GitHub Pages deployment with dynamic page routing.

## How It Works

### Automatic Page Discovery
- Place any React page component in the `/pages` folder
- Name files with the pattern: `*Page.tsx` (e.g., `MyNewPage.tsx`)
- The system automatically creates a route with a kebab-case slug URL

### Example
- File: `pages/SoporteenEspañolparaViajerosporAsíaPage.tsx`
- URL: `/soporte-en-español-para-viajeros-por-asía`

## Setup Steps for GitHub Pages

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial setup for GitHub Pages"
git push origin main
```

### 2. Configure GitHub Repository
1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: `main` 
   - Folder: `/dist`
4. Click **Save**

### 3. Enable GitHub Actions (Optional - for auto-deploy)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Add New Pages
Simply add new `*Page.tsx` files to the `/pages` folder:

```tsx
// pages/ContactPage.tsx
import React from 'react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <h1>Contact Page</h1>
    </div>
  )
}
```

This will automatically be available at: `/contact`

## Project Structure

```
/workspace
├── pages/                    # Put your page components here
│   └── *Page.tsx            # Auto-discovered pages
├── src/
│   ├── main.jsx             # Main entry point with auto-routing
│   └── index.css            # Tailwind CSS imports
├── dist/                     # Built output (deploy this to GitHub Pages)
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Important Notes

1. All pages must be in `/pages` folder with `Page.tsx` suffix
2. URLs are auto-generated from filenames (camelCase → kebab-case)
3. Build output goes to `/dist` folder
4. GitHub Pages needs the `/dist` folder to be deployed
