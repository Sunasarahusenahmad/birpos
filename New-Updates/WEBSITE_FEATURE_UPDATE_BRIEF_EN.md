# Verified feature update brief for the BirStock website

**Website:** [birstock.com](https://birstock.com/)  
**Audit date:** 25 October 2026  
**Purpose:** Give the website editor/model instructions for updating public product content based on BirStock’s current application features.

This brief covers only the public website and customer-facing product features.

## Pages reviewed

I followed the website’s own navigation links and reviewed the homepage, Features index, nine feature pages, six industry pages, three product/SEO pages, Pricing, FAQ, About, Contact, and three legal pages. I also expanded the visible FAQ answers.

One technical issue: the pages rendered when opened through the website’s internal navigation, but direct requests to those same page URLs returned 404 during this audit. Direct URL loading should also be fixed so shared links, bookmarks, and search results work.

### Page coverage

- **Homepage** — offline POS, GST, inventory, Khata, suppliers, Drive backup, industries, and headline metrics.
- **Features index** — POS, inventory, Khata, suppliers, GST, backup, reports, security, and financial year management.
- **Feature details** — `/features/pos-billing`, `/inventory-management`, `/customer-khata`, `/supplier-management`, `/gst-billing`, `/backup-sync`, `/reports-analytics`, `/security`, and `/financial-year`.
- **Industry pages** — Supermarkets, Kirana/Grocery, Electronics/Mobile, Hardware/Sanitary, Apparel/Footwear, and Wholesale.
- **Product/SEO pages** — Offline billing software, GST billing software, and retail shop billing software.
- **Other public pages** — Pricing, FAQ, About, Contact, Privacy Policy, Terms of Service, and Refund Policy.

## Features already described on the website

The website already covers many of BirStock’s main features. Avoid duplicating these sections; update them with the accuracy changes below.

### POS billing

The website describes keyboard and touch/grid billing, barcode scanning, the item cart, F9 hold/resume, F10 checkout, stock-limit guards, item and bill discounts, payment, and change/due summaries. The retail shop page also mentions cart multitasking and thermal receipt customization.

The app includes Quick POS and regular POS, barcode/search, held bills, stock validation, discounts, and received-amount/payment calculations. Explain **Hold Cart** as pausing one bill at a counter so another can be started. Do not imply that separate desktop registers share networked billing unless that workflow is verified in the current product.

### Inventory and purchasing

The website describes the product catalogue, barcode/SKU, category, units, cost/sale price, low-stock alerts, stock intake from suppliers, and serial/IMEI tracking. The app includes inventory, purchasing, low-stock views, product Excel import/export, and serial-tracked products.

Add a short section about Excel bulk import/export and stock updates through purchases. Do not claim automatic reordering, cloud inventory, or product-directory search unless those functions are present in the current release.

### Customer Khata

The website describes credit sales, customer ledgers, payments, return entries, due balances, and WhatsApp/PDF statement sharing. The app includes customer records, Khata/ledger, payments, bill history, and sales returns; it supports customer statement PDF export.

The desktop customer screen code did not show a one-click workflow for sending a customer ledger through WhatsApp. Remove that claim unless the feature works in the currently released desktop app. PDF export can remain listed. Verify the overpayment/advance-balance claim against the released app before publishing it.

### Suppliers and purchase returns

The website covers supplier directories, purchase history, supplier dues, payment references, purchase returns/debit notes, and stock/balance adjustments. The app has supplier purchase tracking, purchase returns/debit notes, stock/due adjustments after returns, and PDF export code.

This is useful existing coverage. Match the wording and screenshots to the actual forms and fields in the current app.

### GST and invoices

The website describes mixed-rate bills, intra-state CGST/SGST, inter-state IGST, HSN/SAC, B2B/B2C invoices, Bills of Supply, and thermal/A4 output. The app supports GST rates, customer/supplier GSTIN and address fields, invoice tax breakdowns, and thermal/A4 templates.

Some website claims were not confirmed in the app code: automatic state-code tax selection, an HSN/SAC auto-suggest directory, one-click GSTR-1 export for the GST portal, A5 printing, and printer auto-detection. Do not publish these until they are confirmed in the current app UI/export. Use “fully/completely compliant” wording only after a product/accounting review.

### Backup and restore

The website describes local encrypted ZIP backups, retention of 20 copies, Google Drive OAuth backup, a configurable schedule, and merge/replace restore modes. The app provides local backup/restore, Google Drive backup, schedule/retention settings, and restore workflows.

The website says the default schedule is **22:00**; the app scheduler/settings default is **21:00**, although users can change it. Say “at the time you choose,” or make the published default match the app. The default retention value of 20 is present in the code/schema, and the UI allows it to be changed. “20 by default; configurable by the user” is accurate.

Match the exact names and outcomes of Smart Merge/Clean Replace to the current app UI. Label sample records shown in website demos as illustrative; do not present them as real customer data or as a live capture from the app.

### Reports and analytics

The website describes a dashboard, sales trends, estimated profit, dues, fast/slow sellers, and report printing/PDF. The app has sales, profit/loss, and GST/tax reports, plus PDF/print exports.

Verify exact claims such as “0.2ms query speed,” sample revenue/margins, hourly peak charts, and live refresh after every purchase/return against the released app and measured results. If the page is an interactive mock-up, label it as an **illustrative demo** so visitors do not think it is live-connected or showing real customer data.

### Security

The website’s Security page says the app automatically locks when idle, protects sensitive screens/edits with a 4-digit PIN, and handles email OTP recovery locally without a server. The app has a PIN App Lock; it can request a PIN when the app starts, and the user can lock it manually. The PIN setup/change/reset email OTP flow uses the licence server and requires internet.

The current desktop code did not show an inactivity auto-lock timer. Do not describe the App Lock as a per-screen or per-edit permission system. Remove the idle auto-lock claim unless it exists in the released app. Describe OTP recovery accurately: an OTP is sent to the registered email through the server, and internet is required during setup/reset. Remove the claim that all authentication happens locally.

### Financial year

The website describes closing/creating a financial year, isolating old-year data, carrying forward stock and customer/supplier balances, and keeping past years read-only. The app has financial-year creation/switching and carry-forward workflows. Match the exact sequence, read-only restrictions, and PIN requirements to the current UI. Label demonstration figures as examples.

## App features that need new website coverage

These capabilities are present in the current desktop/mobile code or project guide, but were not clearly covered as separate topics in the reviewed website feature catalogue.

1. **BirStock Go mobile companion** — Pair a phone with the desktop over the local network using QR/device pairing. Supported phone workflows include sales and selected customer/invoice/stock views; queued offline work syncs after reconnection. Add a “BirStock Go” feature section/page. Explain the LAN/Wi-Fi requirement and which workflows are available on mobile. Do not describe the mobile app as a complete desktop replacement.
2. **Multi-company/store profile switching** — The desktop app has an engine for keeping company/firm data separate and switching between companies. Describe this only after confirming that the current release UI and customer licensing terms expose it.
3. **Expenses and other income** — The app has expense/income entries and includes them in reporting totals. Add a short section to the Features index or Reports page.
4. **Product spreadsheet workflow** — Add product Excel import/export to the Inventory page.
5. **Accurate App Lock guidance** — Add a clear Security/FAQ explanation of PIN setup, unlocking/manual lock, email OTP reset, and when internet is required.
6. **App updates** — The desktop app can check for, download, and install releases. Explain the normal update/restart flow on the Download/FAQ page. Do not claim silent background updating unless the current settings actually provide it.
7. **Returns** — The app supports customer sales returns and supplier purchase returns/debit notes. Link to each flow from the relevant Customer, Supplier, and FAQ pages.

## Website copy that needs correction

### Offline and internet requirements

The homepage says no internet is required to bill, while the FAQ associates internet only with optional Google Drive backup. Daily billing/business data is local-first, but activation/licence checks, update downloads, first-time recovery-email setup, and Forgot PIN/email OTP recovery may require internet.

Suggested wording:

> “BirStock’s billing and business database run locally on your computer, so after licence activation you can create day-to-day bills without internet, subject to licence status. Internet is required for licence activation/checks, software updates, optional Google Drive backup, and email OTP PIN recovery.”

Confirm the precise offline licence behavior with the product owner before publishing the last qualification.

### Data privacy and Privacy Policy

The homepage, FAQ, and privacy copy currently imply that customer/account data never touches a BirStock server. The business database remains local, and optional backups can go to the user’s Google Drive; however, licence/device operations and App Lock recovery email/OTP involve a server.

Update the Privacy Policy to distinguish these categories: local business records, optional Google Drive backups, licence/device verification information, recovery email/OTP, and website contact/demo forms. Explain what is sent, why, and where it is stored. Avoid absolute statements such as “no data ever goes to a server.”

### GST rate count and tax claims

The app’s built-in defaults contain five GST rate percentages—0%, 5%, 12%, 18%, and 28%—plus a separate IGST tax type. The website’s “6 GST rate slabs” wording counts these in a misleading way. Suggested wording: **“Five built-in GST rate percentages, with intra-state CGST/SGST and inter-state IGST handling.”** Mention custom-rate support separately if applicable.

### Meaning of networked multi-counter billing

The website sometimes combines “multi-counter” with Hold Cart. The FAQ’s verified description is pausing a bill at one counter and starting another. Call this **multiple bills at one counter**. Claim shared billing across separate desktop registers/devices only if the exact workflow is tested and officially supported.

### Direct page loading

Pages could be viewed by clicking the website’s internal navigation, but direct URL requests to the same routes returned 404 during this audit. Fix the hosting/Next routing so feature and industry pages load when opened directly, refreshed, or reached from search results.

## Page-by-page update checklist

| Page | What to update/add |
|---|---|
| Homepage | Qualify the offline claim for licence/update/OTP requirements; add clear App Lock recovery and BirStock Go links; correct the GST-rate count and backup-time wording. |
| Features index | Keep the existing nine feature groups; add Expenses/Income and BirStock Go cards; match Company/Financial Year copy to the released workflow. |
| POS Billing | Explain held bills versus true multi-device counters, barcode, stock guard, discounts, due/received validation, and Quick POS shortcuts. |
| Inventory | Explain Excel import/export, purchase-driven stock updates, low-stock alerts, and optional serial/IMEI tracking. |
| Customer Khata | Explain ledgers, dues, payments, bills, and sales returns; keep WhatsApp statement sharing only if the released desktop app supports it. |
| Supplier | Explain supplier purchases, dues/settlements, and purchase return/debit-note flow. |
| GST Billing | Explain built-in rates, CGST/SGST/IGST, invoice fields, and user-selected print layouts; remove or verify unconfirmed GSTR-1/HSN auto-suggest/A5/auto-detect claims. |
| Backup & Sync | Explain local backup/restore, optional encrypted Drive backup, user schedule, and configurable retention; correct the default-time mismatch. |
| Reports | List current sales/profit/GST reports and PDF/print export; label demo-only metrics as examples. |
| Security | Correct the idle auto-lock and local-only OTP claims; explain PIN setup/unlock/recovery and internet requirements. |
| Financial Year | Match year close/create, carry-forward, and old-year restrictions to the current UI/migration behavior. |
| BirStock Go (new) | Explain pairing, LAN/Wi-Fi, supported phone operations, offline queue/sync, and mobile limitations. |
| Offline/GST/Retail SEO pages | Use the same verified wording; qualify absolute claims about internet, tax compliance, printing, and speed. |
| Industry pages | Keep examples relevant to each shop type; the six segments were reviewed. Match specific IMEI, contractor dues, returns, and bulk inventory claims to supported workflows. |
| FAQ | Provide accurate answers on internet, backup, PC change/restore, App Lock OTP, Hold Cart vs multiple devices, GST, financial year, and updates. |
| About / Contact | Keep the current company overview and demo/download/support paths; align offline/privacy wording with the rest of the website. |
| Privacy / Terms / Refund | Update privacy disclosures for licence/device/recovery-email server flows; review Terms and refund statements against current public behavior and the actual policy. |

## Instructions for the website editor/model

- Preserve the existing design, navigation, SEO layout, demo/download/contact buttons, and brand styling.
- Update existing material on the relevant pages rather than copying the same generic feature list everywhere.
- Include BirStock Go, Expenses/Income, multi-company, Excel import/export, and PIN OTP recovery with their actual release scope and limitations.
- Label sample/demo figures as illustrative. Do not present them as live app data or real customer records.
- Do not publish exact claims about tax compliance, networked multi-counter, WhatsApp statements, auto-lock, GSTR export, or printer/backup timings without checking them against the current app build.
- Write public website copy in clear, natural English.

## App-side references used for comparison

The comparison uses the local project’s `PROJECT_CONTEXT.md`, desktop `renderer/js/modules/`, `src/main/licence/`, `src/main/updater/`, `src/main/bridge/`, `src/services/googleDrive/`, database schema, and `mobile/` code/docs.

**Website sources reviewed:** [Homepage](https://birstock.com/), [sitemap](https://birstock.com/sitemap.xml), and the public pages linked from the website’s internal navigation.
