/* ============================================================
   NORTH SPHERE CONSULTING — CMS CONFIGURATION
   cms-config.js

   ✏️  CLIENT INSTRUCTIONS — only this file needs editing.
   ─────────────────────────────────────────────────────────
   Step 1:  Open your Google Sheet.
   Step 2:  File → Share → Publish to web
            Sheet: "Content"  |  Format: CSV  |  click Publish.
   Step 3:  Copy the URL and paste it below as NSC_SHEET_URL.
   Step 4:  Save this file and push to GitHub (see hosting guide).

   That's it. The website will automatically pull the latest
   content from your sheet every 5 minutes.
   ============================================================ */

// ── PASTE YOUR PUBLISHED GOOGLE SHEETS CSV URL HERE ─────────
window.NSC_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSw-_IGFj7xF46_kfGSKFNlQpZt5RNc0Tst-M0c4FC_P5XXzkgYxzvejne2FyTfVFkFm_NEdYpjgGhG/pub?gid=0&single=true&output=csv';
//  ^ Replace the entire URL above with your own published CSV link.


// ── OPTIONAL SETTINGS ───────────────────────────────────────
// How many seconds to cache the sheet before re-fetching.
// 300 = 5 minutes.  Use 0 to always fetch live (slower page loads).
window.NSC_CACHE_TTL = 300;

// Set to true to show a small teal badge while testing.
// IMPORTANT: set back to false before sharing the live site.
window.NSC_DEBUG = false;
