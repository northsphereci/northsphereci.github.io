# North Sphere Consulting
## Website Hosting & Content Management Guide

**Version 1.0 · Prepared for North Sphere Consulting**
*This document is written for non-technical users. No coding knowledge is required for day-to-day content updates.*

---

## Table of Contents

1. [Overview](#1-overview)
2. [Part A — Hosting on GitHub Pages](#part-a--hosting-on-github-pages)
   - A1. Create a GitHub Account
   - A2. Create Your Repository
   - A3. Upload the Website Files
   - A4. Enable GitHub Pages
   - A5. Connect Your Custom Domain
   - A6. Making Future Updates
3. [Part B — Google Sheets Content Management](#part-b--google-sheets-content-management)
   - B1. Set Up the Google Sheet
   - B2. Connect the Sheet to the Website
   - B3. Editing Content — The Daily Workflow
   - B4. Adding & Changing Images
   - B5. Understanding the Sheet Structure
   - B6. Languages (EN / FR)
4. [Quick Reference: Common Edits](#4-quick-reference-common-edits)
5. [Troubleshooting](#5-troubleshooting)
6. [Glossary](#6-glossary)

---

## 1. Overview

Your website has two parts:

| Part | What it is | Who manages it |
|---|---|---|
| **Hosting** | Where your site "lives" on the internet | GitHub Pages (free, reliable, no monthly fee) |
| **Content** | The text and images visitors read | Google Sheets — edited like a spreadsheet |

Once set up (takes about 45 minutes the first time), your day-to-day workflow is simply:

> Open Google Sheet → Edit a cell → Save → Website updates within 5 minutes ✓

---

## Part A — Hosting on GitHub Pages

GitHub Pages is a free hosting service used by thousands of professional organisations worldwide, including government agencies, NGOs, and research institutions. It has 99.9% uptime and automatic security (HTTPS).

### A1. Create a GitHub Account

1. Go to **[github.com](https://github.com)** and click **Sign up**.
2. Enter your email, create a password, and choose a username.
   - Suggested username: `northsphereconsulting`
3. Verify your email address when prompted.
4. On the plan selection page, choose **Free** — it includes everything you need.

---

### A2. Create Your Repository

A "repository" is a folder on GitHub that holds your website files.

1. Once logged in, click the green **New** button (top left) or go to `github.com/new`.
2. Fill in the form:

   | Field | What to enter |
   |---|---|
   | **Repository name** | `northsphereconsulting.github.io` |
   | **Description** | North Sphere Consulting website |
   | **Visibility** | ✅ Public |
   | **Add a README** | Leave unchecked |

   > ⚠️ **Important:** The repository name must be exactly `[your-username].github.io` — replace `[your-username]` with the username you chose in A1. This is what activates GitHub Pages automatically.

3. Click **Create repository**.

---

### A3. Upload the Website Files

1. On your new repository page, click **uploading an existing file** (shown in the centre of the page).
2. Open the `north-sphere-consulting` folder on your computer.
3. **Select all files and folders** inside it:
   - `index.html`
   - `about.html`
   - `expertise.html`
   - `services.html`
   - `approach.html`
   - `contact.html`
   - `css/` folder (drag the whole folder)
   - `js/` folder (drag the whole folder)
4. Drag them all into the GitHub upload area, or click **choose your files**.
5. At the bottom of the page, under **Commit changes**:
   - Leave the first field as is ("Add files via upload")
   - Click the green **Commit changes** button.
6. Wait 30–60 seconds for the upload to complete.

---

### A4. Enable GitHub Pages

If you named your repository `[username].github.io` exactly, Pages is already enabled. To confirm:

1. Click **Settings** (tab near the top of your repository page).
2. In the left sidebar, click **Pages**.
3. Under **Source**, you should see: *"Your site is live at `https://northsphereconsulting.github.io`"*
4. Click that link — your website is now live on the internet. 🎉

> **First deployment takes 2–5 minutes.** If you see a 404 page, wait a moment and refresh.

---

### A5. Connect Your Custom Domain (e.g. northsphereconsulting.com)

To use your own domain name instead of the `.github.io` address:

**Step 1 — Tell GitHub your domain:**

1. Go to **Settings → Pages** in your repository.
2. Under **Custom domain**, type your domain: `northsphereconsulting.com`
3. Click **Save**.
4. GitHub will create a file called `CNAME` in your repository automatically.

**Step 2 — Update your DNS records:**

Log in to wherever you bought your domain (GoDaddy, Namecheap, Google Domains, etc.) and add these DNS records:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `northsphereconsulting.github.io` |

> DNS changes take **up to 48 hours** to propagate worldwide, though usually much faster.

**Step 3 — Enable HTTPS (free SSL):**

Once DNS has propagated, go back to **Settings → Pages** and check **Enforce HTTPS**. This gives your site the padlock icon and `https://` prefix — important for credibility with institutional clients.

---

### A6. Making Future Updates to Website Files

When you need to make structural changes (adding a new page, changing the design):

**Option 1 — Upload via browser (easiest):**
1. Go to your repository on github.com.
2. Click the file you want to replace (e.g. `about.html`).
3. Click the pencil ✏️ icon to edit, or the upload icon to replace.
4. After editing, click **Commit changes**.
5. Your live site updates within **1–2 minutes**.

**Option 2 — Drag and drop new files:**
1. In your repository, click **Add file → Upload files**.
2. Drag in the updated file(s).
3. Click **Commit changes**.

> **For text and image changes**, use the Google Sheet method described in Part B — it's faster and doesn't require touching GitHub at all.

---

## Part B — Google Sheets Content Management

The website is connected to a Google Sheet that controls all editable text and images. Think of it as a **control panel** for your website content.

### B1. Set Up the Google Sheet

**Create the sheet:**

1. Go to [sheets.google.com](https://sheets.google.com) and click **Blank spreadsheet**.
2. Rename it: click "Untitled spreadsheet" at the top and type `North Sphere — Website Content`.
3. Rename the first tab (bottom left, currently says "Sheet1"): double-click it and type `Content`.

**Set up the column headers in Row 1:**

Click cell **A1** and type these headers across the row:

| A1 | B1 | C1 | D1 | E1 |
|---|---|---|---|---|
| `key` | `en` | `fr` | `notes` | `last_updated` |

Your sheet should now look like this:

```
A              B                   C                   D        E
key            en                  fr                  notes    last_updated
hero-headline  Advisory for...     Conseil pour...     Hero h1  2025-01-15
...
```

**Populate the content rows:**

Copy the table from Section B5 below and paste it into your sheet starting at Row 2. The `key` column tells the website which piece of text to replace. You edit the `en` and `fr` columns.

---

### B2. Connect the Sheet to the Website

**Step 1 — Publish your sheet as CSV:**

1. In Google Sheets, click **File → Share → Publish to web**.
2. In the first dropdown, select **Content** (your sheet tab name).
3. In the second dropdown, select **Comma-separated values (.csv)**.
4. Click **Publish**.
5. Click **OK** when prompted.
6. **Copy the URL** that appears — it looks like:
   ```
   https://docs.google.com/spreadsheets/d/1aBcD.../pub?gid=0&single=true&output=csv
   ```

**Step 2 — Paste the URL into the website:**

1. Open the file `js/cms-config.js` in your GitHub repository (click it in the file list).
2. Click the pencil ✏️ icon to edit.
3. Find this line:
   ```
   window.NSC_SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/...';
   ```
4. Replace the entire URL in quotes with the one you copied.
5. Click **Commit changes**.

**Step 3 — Test it:**

Visit your website. Open the browser console (press F12 → Console tab) and look for:
```
[NSC CMS] Loaded X keys from sheet
```
If you see this, the connection is working. ✓

---

### B3. Editing Content — The Daily Workflow

This is your normal process for updating any text on the website:

```
1. Open your Google Sheet
2. Find the row with the key you want to change
   (use Ctrl+F / Cmd+F to search)
3. Edit the text in the "en" column (English)
   and/or the "fr" column (French)
4. Press Enter or click another cell to save
5. Wait up to 5 minutes
6. Refresh your website — the change is live ✓
```

**Tips:**
- You can edit multiple rows at once — they all update together.
- The `notes` column is just for your reference — write anything helpful there (e.g. "Used on homepage hero section").
- The `last_updated` column is optional — fill it in to track when you last changed each item.
- To temporarily hide a row from the website without deleting it, start the key with `#` (e.g. `#hero-headline`). The CMS ignores rows starting with `#`.

---

### B4. Adding & Changing Images

Images are handled the same way as text — via a key in the sheet.

**How it works:**
- Image keys end in `-img` (e.g. `team-ma-img` for Dr. Archambault's photo).
- The value in the `en` column should be a **direct image URL**.

**Getting a direct image URL:**

*Option A — Google Drive (recommended for team photos):*
1. Upload your image to Google Drive.
2. Right-click → **Share** → change to "Anyone with the link".
3. Click **Copy link**. You'll get something like:
   ```
   https://drive.google.com/file/d/1XyZ.../view?usp=sharing
   ```
4. Convert it to a direct link by replacing the end:
   ```
   https://drive.google.com/uc?export=view&id=1XyZ...
   ```
   (Replace `1XyZ...` with the ID from your link.)

*Option B — Paste the direct URL from any image hosting service* (Cloudinary, ImgBB, Unsplash, etc.)

**Example sheet row for an image:**

| key | en | fr | notes |
|---|---|---|---|
| `team-ma-img` | `https://drive.google.com/uc?export=view&id=ABC123` | *(same URL)* | Dr. Archambault headshot |

**Making an HTML element image-aware:**

In the HTML file, add `data-i18n="team-ma-img"` to an `<img>` tag:
```html
<img data-i18n="team-ma-img" alt="Dr. Marie Archambault" />
```

For background images, use `data-cms-bg` instead:
```html
<div data-cms-bg="hero-bg-img" class="hero-visual"></div>
```

---

### B5. Understanding the Sheet Structure

Below is the complete list of content keys for the North Sphere website. Copy this table into your Google Sheet starting at Row 2.

> **Bold** keys are the most commonly edited. Edit the `en` and `fr` columns only — never change the `key` column.

#### Navigation & Global

| key | Default (EN) | Notes |
|---|---|---|
| `nav-home` | Home | Nav link |
| `nav-about` | About | Nav link |
| `nav-expertise` | Expertise | Nav link |
| `nav-services` | Services | Nav link |
| `nav-approach` | Approach | Nav link |
| `nav-contact` | Contact | Nav link |
| `nav-cta` | Get in Touch | Nav button |
| `footer-desc` | Independent advisory for a complex world… | Footer tagline |
| `footer-copy` | © 2025 North Sphere Consulting… | Copyright line |

#### Home Page — Hero

| key | Default (EN) | Notes |
|---|---|---|
| **`hero-headline`** | Interdisciplinary Advisory for Science… | Main H1 — most prominent text |
| **`hero-sub`** | North Sphere Consulting delivers… | Subtitle paragraph |
| `hero-label` | Advisory · Strategy · Impact | Small label above headline |
| `hero-btn1` | Explore Our Services | Primary button |
| `stat-1-lbl` | Years of Experience | Stat bar label |
| `stat-2-lbl` | Countries Engaged | Stat bar label |
| `stat-3-lbl` | Mandates Completed | Stat bar label |

#### Home Page — Why North Sphere

| key | Default (EN) | Notes |
|---|---|---|
| `why-heading` | Built differently, for harder problems | Section heading |
| **`why-1-title`** | Practitioner-Led | Card 1 title |
| **`why-1-desc`** | Every engagement is led by… | Card 1 body |
| **`why-2-title`** | Interdisciplinary by Design | Card 2 title |
| **`why-2-desc`** | Most problems at the intersection… | Card 2 body |
| **`why-3-title`** | Evidence, Not Frameworks | Card 3 title |
| **`why-3-desc`** | We distrust one-size-fits-all… | Card 3 body |

#### Home Page — Services

| key | Default (EN) | Notes |
|---|---|---|
| **`svc-1-name`** | Strategic Advisory | Service 1 name |
| **`svc-1-desc`** | High-level strategic counsel… | Service 1 description |
| **`svc-2-name`** | Policy & Research Guidance | Service 2 name |
| **`svc-2-desc`** | Rigorous research design… | Service 2 description |
| **`svc-3-name`** | Program Design | Service 3 name |
| **`svc-3-desc`** | End-to-end design of programs… | Service 3 description |
| **`svc-4-name`** | Institutional Capacity Building | Service 4 name |
| **`svc-4-desc`** | Tailored capacity development… | Service 4 description |
| **`svc-5-name`** | Impact Evaluation | Service 5 name |
| **`svc-5-desc`** | Mixed-methods evaluation frameworks… | Service 5 description |

#### About Page

| key | Default (EN) | Notes |
|---|---|---|
| **`mission-statement`** | To strengthen the institutions… | Mission pull-quote |
| **`founding-p1`** | North Sphere was founded in Ottawa… | Founding story paragraph 1 |
| **`founding-p2`** | Over twenty years, we have grown… | Founding story paragraph 2 |
| **`founding-p3`** | Today, North Sphere operates… | Founding story paragraph 3 |
| `ms-2004-title` | Founded in Ottawa | Timeline milestone title |
| `ms-2004-desc` | Established as a health systems… | Timeline milestone description |
| `ms-2010-title` | Expanded to Six Domains | Timeline milestone title |
| `ms-2010-desc` | Broadened practice to include… | Timeline milestone description |
| `ms-2016-title` | Opened Geneva & Nairobi Offices | Timeline milestone title |
| `ms-2023-title` | Asia-Pacific Practice Launched | Timeline milestone title |

#### About Page — Team

| key | Default (EN) | Notes |
|---|---|---|
| **`team-bio-ma`** | Dr. Archambault brings 25 years… | Bio paragraph |
| **`team-bio-jo`** | Dr. Okonkwo is a physician… | Bio paragraph |
| **`team-bio-sl`** | Ms. Larouche has 18 years… | Bio paragraph |
| **`team-bio-rv`** | Dr. Verma is a civil engineer… | Bio paragraph |

#### Contact Page

| key | Default (EN) | Notes |
|---|---|---|
| **`contact-heading`** | Let's work together | Page heading |
| **`contact-intro`** | Whether you're exploring… | Intro paragraph |
| `contact-loc` | Ottawa, Canada · Global Offices | Address line |
| `contact-email` | advisory@northsphereconsulting.com | Email address |
| `contact-ph` | +1 (613) 555-0190 | Phone number |

---

### B6. Languages (EN / FR)

Every key has both an English (`en`) and French (`fr`) column. When a visitor clicks the FR button on your site, it switches to the French values.

**Rules:**
- If the `fr` column is empty for a row, the site falls back to the `en` value — so you can add translations gradually.
- HTML tags like `<em>` (italic) and `<br>` (line break) work inside cell values.
  - Example: `Advisory for <em>Science</em> and Impact`
- Avoid using double-quotes `"` inside cells — use `'` (single quote) or the `&ldquo;` / `&rdquo;` HTML entities instead.

---

## 4. Quick Reference: Common Edits

| I want to… | What to do |
|---|---|
| Change the homepage headline | Edit row with key `hero-headline` in the sheet |
| Update a team member's bio | Edit row with key `team-bio-ma` (or `jo`, `sl`, `rv`) |
| Add a new team member photo | Upload to Drive, add key `team-XX-img` with drive URL |
| Change the phone number | Edit row with key `contact-ph` |
| Update the mission statement | Edit row with key `mission-statement` |
| Change a service description | Edit row `svc-1-desc` through `svc-5-desc` |
| Add a French translation | Fill the `fr` column for any row |
| Force the site to reload content now | Visit site, open console (F12), type `NSC_CMS.refresh()` then refresh the page |
| Temporarily hide a content row | Put `#` at the start of the key (e.g. `#hero-headline`) |

---

## 5. Troubleshooting

**My edits aren't showing on the website.**
- The site caches content for 5 minutes. Wait 5 minutes and refresh.
- To force an immediate refresh: open browser console (F12), type `NSC_CMS.refresh()`, press Enter, then refresh the page.
- Check that the row `key` exactly matches what's in the HTML. Keys are case-sensitive.

**The site shows the old text, not my sheet.**
- Make sure the sheet is still published. Go to File → Share → Publish to web and check the status says "Published".
- Confirm the URL in `cms-config.js` matches exactly what Google gave you.

**I see broken/garbled text.**
- You may have pasted text with "smart quotes" (`"`) — replace them with straight quotes or HTML entities.
- Check for stray `<` or `>` characters in your cell — these need to be written as `&lt;` and `&gt;` unless they're HTML tags.

**The French text isn't showing.**
- Make sure the `fr` column has content for that row.
- Click the FR button on the website and wait a moment.

**GitHub Pages is showing a 404 error.**
- Wait 5 minutes after uploading — Pages can take time to build.
- Double-check your repository name is exactly `[username].github.io`.
- Make sure `index.html` is at the root of the repository (not inside a subfolder).

**My custom domain isn't working.**
- DNS changes can take up to 48 hours. Check back the next day.
- Verify the four `A` records and `CNAME` record are saved correctly with your domain registrar.

---

## 6. Glossary

| Term | Plain-language definition |
|---|---|
| **Repository** | A folder on GitHub that holds all your website files |
| **GitHub Pages** | GitHub's free service that turns your repository into a live website |
| **DNS** | The internet's address book — maps your domain name to the server where your site lives |
| **HTTPS / SSL** | The padlock in the browser bar. Means the connection is encrypted and secure |
| **CSV** | A simple spreadsheet format. Google Sheets can export as CSV so our CMS can read it |
| **Key** | A unique name that links a row in your sheet to a specific piece of text on the website |
| **Cache** | A saved copy of the sheet that the browser holds for 5 minutes to keep the site fast |
| **Commit** | Saving a change in GitHub (equivalent to hitting Save) |
| **CNAME** | A type of DNS record that points `www.yourdomain.com` to your GitHub Pages site |
| **Console** | A developer tool in the browser (press F12). Used for troubleshooting only |

---

*For technical support or to request changes beyond what the CMS covers, contact your web developer and share this document.*

---
**North Sphere Consulting — Website Documentation v1.0**
