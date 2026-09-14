# Barama College Official Website & Portal

A modern, responsive institutional website for **Barama College, Barama** (affiliated with Bodoland University, NAAC Re-Accredited, Estd. 1971), complete with an integrated **Student ERP Portal** and administrative **Content Management System (CMS)**.

---

## 🚀 How to Publish to GitHub Pages

This repository is already configured with an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`) and relative asset paths (`base: './'` in `vite.config.ts`).

### Option 1: Automated Deployment via GitHub Actions (Recommended)

1. **Push this code to your GitHub repository**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository settings**:
   - Go to your repository on GitHub.
   - Click on **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &gt; **Source**, select **GitHub Actions**.

3. **Done!**
   - The workflow will automatically build and publish your website.
   - Your site will be live at:
     `https://<your-username>.github.io/<your-repository-name>/`

---

### Option 2: Manual Export & Static Hosting

If you prefer building static files locally:
```bash
npm install
npm run build
```
The compiled static website will be in the `dist/` directory, ready to deploy to GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript linter
npm run lint

# Create production build
npm run build
```

---

## 🏛️ Features Included

- **Public Institutional Portal**:
  - Urgent Notice Marquee ticker (synced with CMS)
  - Interactive Hero Slider
  - Quick Academic Services (Admissions, Examinations, Syllabus, E-Library)
  - Department Showcase (Arts, Science, BCA, PG) with Syllabus Viewer
  - Notice Board & Event Hub with Search & Filters
  - Facilities (KOHA Library, Hostels, Science Labs, NCC Wing, Sports Ground)
  - Media Photo Gallery with Lightbox
  - Contact & Travel Directions Form

- **Integrated Student ERP Portal**:
  - 1-Click Demo Login (`Priyanjali Brahma`, Roll: `BC/2023/UG/0142`)
  - Digital College Identity Card with Barcode & QR code
  - Bodoland University End-Semester Examination Admit Card
  - Fee Ledger & Online SBI e-Pay Payment Checkout
  - Results & Grade Cards (SGPA/CGPA with distinction classification)
  - Subject-wise Attendance Ledger (with 75% examination threshold alerts)
  - Central Library OPAC Search & Online Book Reservation
  - Student Grievance Redressal Desk

- **Administrative CMS**:
  - Notice Manager (with urgent ticker injection & pinned flags)
  - Event Calendar Manager
  - Faculty Directory Manager
  - Grievance Redressal Desk (with responses reflecting in student portals)
  - Photo Gallery Manager
  - Local persistence & one-click Reset to Defaults
