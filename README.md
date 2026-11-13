CAR HIRE FLEET LOGBOOK - on-phone version (Custom Factory)

WHAT THIS IS
A web app that saves every record and photo on the phone that uses it.
No Claude account and no sign-in are needed. It works without internet once it has been opened.

WHAT'S IN THIS FOLDER
index.html             the app
manifest.webmanifest   lets phones install it like an app
sw.js                  makes it work offline
icons/                 app icons
fonts/                 Barlow fonts (open licence, see fonts/OFL-LICENSE.txt)

PUT IT ONLINE (once)
The whole folder must be on a website that uses https.
Any free static host works, for example Netlify, GitHub Pages or Cloudflare Pages.
Upload the folder exactly as it is, keeping the icons and fonts folders.

GIVE IT TO A CUSTOMER
Send them the website link. They open it, then install it:
  iPhone:  Safari > Share > Add to Home Screen  (always open it from the Home Screen)
  Android: Chrome > menu (3 dots) > Install app / Add to Home screen
Every phone keeps its own records, so the same link works for every customer.
They type their company name in Company details on the first screen.

BACKUPS
Records stay on the phone only. Tell customers to use Backup & restore every week
and keep the file on WhatsApp, Google Drive or iCloud. To move to a new phone,
open the app on the new phone and restore the latest backup file.

UPDATING THE APP
Replace the files on the website. Phones pick up the new version the next time
the app is opened, and their records are kept.
If you change sw.js, also change the version name in its first line (fleet-logbook-v1 to v2).
