/* ============================================================
   NORTH SPHERE CONSULTING — GOOGLE SHEETS CMS
   cms.js  |  Fetches live content from a published Google Sheet
            and overlays it on top of the built-in translations.

   HOW IT WORKS
   ─────────────
   1. Client edits the Google Sheet (one row per content key).
   2. Sheet is published as CSV via File → Share → Publish to web.
   3. This script fetches that CSV on every page load, parses it,
      and merges it into the TRANSLATIONS object BEFORE applyLang()
      runs — so sheet content always wins over the defaults.
   4. If the sheet is unreachable (offline, quota, etc.) the site
      falls back gracefully to the built-in translations.

   SHEET FORMAT (see GITHUB-HOSTING-GUIDE.md for setup steps)
   ─────────────────────────────────────────────────────────────
   Column A  │  key          │  e.g.  hero-headline
   Column B  │  en           │  English text
   Column C  │  fr           │  French text
   Column D  │  notes        │  (ignored — for client reference)
   Column E  │  last_updated │  (ignored — for client reference)

   IMAGES
   ───────
   For any key ending in "-img", the value should be a direct
   image URL (Google Drive share link converted to direct link,
   Unsplash, Cloudinary, etc.).  The CMS will set that URL as
   the src of any <img data-i18n="hero-img"> element, or as the
   background-image of any element with data-cms-bg="hero-img".
   ============================================================ */

(function () {
  'use strict';

  /* ── CONFIG — client fills this in ──────────────────────── */
  const CMS_CONFIG = {
    // Paste your published CSV URL here.
    // In Google Sheets: File → Share → Publish to web
    //   → Sheet: "Content"  → Format: "Comma-separated values (.csv)"
    //   → Click Publish → copy the URL
    sheetCsvUrl: window.NSC_SHEET_URL || '',

    // How long to cache the sheet response (seconds).
    // 300 = 5 minutes.  Set to 0 to always fetch fresh.
    cacheTtl: 300,

    // Show a small "CMS loaded" badge in the corner during preview?
    // Set to false before going live.
    debugBadge: false,
  };

  /* ── CACHE helpers ───────────────────────────────────────── */
  const CACHE_KEY  = 'nsc_cms_cache';
  const CACHE_TIME = 'nsc_cms_cache_ts';

  function readCache() {
    try {
      const ts   = parseInt(localStorage.getItem(CACHE_TIME) || '0', 10);
      const age  = (Date.now() - ts) / 1000;
      if (age < CMS_CONFIG.cacheTtl) {
        const raw = localStorage.getItem(CACHE_KEY);
        return raw ? JSON.parse(raw) : null;
      }
    } catch (_) {}
    return null;
  }

  function writeCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CACHE_TIME, Date.now().toString());
    } catch (_) {}
  }

  function bustCache() {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIME);
  }
  // Expose so client can call NSC_CMS.refresh() from browser console
  window.NSC_CMS = { refresh: bustCache };

  /* ── CSV parser (no external libs needed) ────────────────── */
  function parseCsv(text) {
    const rows   = [];
    const lines  = text.split(/\r?\n/);
    for (const line of lines) {
      if (!line.trim()) continue;
      const cols = [];
      let cur    = '';
      let inQ    = false;
      for (let i = 0; i < line.length; i++) {
        const ch   = line[i];
        const next = line[i + 1];
        if (inQ) {
          if (ch === '"' && next === '"') { cur += '"'; i++; }
          else if (ch === '"')             { inQ = false; }
          else                             { cur += ch; }
        } else {
          if (ch === '"')  { inQ = true; }
          else if (ch === ',') { cols.push(cur); cur = ''; }
          else { cur += ch; }
        }
      }
      cols.push(cur);
      rows.push(cols);
    }
    return rows;
  }

  /* ── Build content map from parsed CSV rows ──────────────── */
  function buildContentMap(rows) {
    // rows[0] is the header: [key, en, fr, notes, last_updated, ...]
    const map = { en: {}, fr: {} };
    if (!rows.length) return map;

    const header = rows[0].map(h => h.trim().toLowerCase());
    const keyIdx = header.indexOf('key');
    const enIdx  = header.indexOf('en');
    const frIdx  = header.indexOf('fr');

    if (keyIdx === -1) {
      console.warn('[NSC CMS] Sheet missing "key" column header.');
      return map;
    }

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const key = (row[keyIdx] || '').trim();
      if (!key || key.startsWith('#')) continue; // skip empty / comment rows

      if (enIdx !== -1 && row[enIdx] !== undefined) {
        const val = row[enIdx].trim();
        if (val) map.en[key] = val;
      }
      if (frIdx !== -1 && row[frIdx] !== undefined) {
        const val = row[frIdx].trim();
        if (val) map.fr[key] = val;
      }
    }
    return map;
  }

  /* ── Merge sheet content into TRANSLATIONS ───────────────── */
  function mergeIntoTranslations(map) {
    if (typeof TRANSLATIONS === 'undefined') {
      console.warn('[NSC CMS] TRANSLATIONS not found. Load cms.js AFTER script.js.');
      return;
    }
    for (const lang of ['en', 'fr']) {
      if (!TRANSLATIONS[lang]) continue;
      for (const [key, val] of Object.entries(map[lang] || {})) {
        TRANSLATIONS[lang][key] = val;
      }
    }
  }

  /* ── Apply image overrides ───────────────────────────────── */
  function applyImages(map) {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
    const t    = map[lang] || map['en'] || {};

    // <img data-i18n="some-img">
    document.querySelectorAll('img[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && key.endsWith('-img') && t[key]) {
        el.src = t[key];
        el.removeAttribute('data-i18n'); // prevent text layer overwriting src
      }
    });

    // <div data-cms-bg="some-img">  → background-image
    document.querySelectorAll('[data-cms-bg]').forEach(el => {
      const key = el.getAttribute('data-cms-bg');
      if (key && t[key]) {
        el.style.backgroundImage = `url('${t[key]}')`;
        el.style.backgroundSize  = 'cover';
        el.style.backgroundPosition = 'center';
      }
    });
  }

  /* ── Debug badge ─────────────────────────────────────────── */
  function showBadge(source) {
    if (!CMS_CONFIG.debugBadge) return;
    const badge = document.createElement('div');
    badge.textContent = `CMS: ${source}`;
    Object.assign(badge.style, {
      position:   'fixed',
      bottom:     '16px',
      right:      '16px',
      background: '#2C8C8C',
      color:      '#fff',
      padding:    '6px 12px',
      borderRadius: '20px',
      fontSize:   '11px',
      fontFamily: 'monospace',
      zIndex:     '9999',
      opacity:    '0.85',
      pointerEvents: 'none',
    });
    document.body.appendChild(badge);
    setTimeout(() => badge.remove(), 4000);
  }

  /* ── Main fetch + apply flow ─────────────────────────────── */
  async function loadCmsContent() {
    if (!CMS_CONFIG.sheetCsvUrl) {
      // No sheet configured — silent no-op
      return;
    }

    // 1. Try cache first
    const cached = readCache();
    if (cached) {
      mergeIntoTranslations(cached);
      if (typeof applyLang === 'function') applyLang(currentLang || 'en');
      applyImages(cached);
      showBadge('cache');
      return;
    }

    // 2. Fetch fresh from Google Sheets
    try {
      const res  = await fetch(CMS_CONFIG.sheetCsvUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const rows = parseCsv(text);
      const map  = buildContentMap(rows);

      writeCache(map);
      mergeIntoTranslations(map);
      if (typeof applyLang === 'function') applyLang(currentLang || 'en');
      applyImages(map);
      showBadge('live');
    } catch (err) {
      console.warn('[NSC CMS] Could not load sheet — using defaults.', err.message);
      showBadge('offline (defaults)');
    }
  }

  /* ── Bootstrap ───────────────────────────────────────────── */
  // Wait for DOM + script.js to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCmsContent);
  } else {
    loadCmsContent();
  }

})();
