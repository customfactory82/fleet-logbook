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

ACTIVATION
The app asks for a company name and an activation code the first time it opens.
Each code only works with the company name it was made for, and the name is then
locked in the app. Make codes on your private "Fleet Logbook Activation Codes" page
in Claude (never put that page or its key in this repository).

GIVE IT TO A CUSTOMER
Make their activation code, then send them the message from the codes page.
They open the link, then install it:
  iPhone:  Safari > Share > Add to Home Screen  (always open it from the Home Screen)
  Android: Chrome > menu (3 dots) > Install app / Add to Home screen
Every phone keeps its own records, so the same link works for every customer.
They open it from the home screen and enter their company name and activation code.

BACKUPS
Records stay on the phone only. Tell customers to use Backup & restore every week
and keep the file on WhatsApp, Google Drive or iCloud. To move to a new phone,
open the app on the new phone and restore the latest backup file.

UPDATING THE APP
Replace the files on the website. Phones pick up the new version the next time
the app is opened, and their records are kept.
If you change sw.js, also change the version name in its first line (fleet-logbook-v1 to v2).
