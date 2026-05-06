# BERSIHir Downloads

GitHub Pages site that hosts the latest **APK** (Android) and **IPA** (iOS) builds of the BERSIHir mobile app.

Live site: https://bersihir.github.io/bersihir-download/

## What's here

- `index.html` — landing page with download links
- `assets/` — static assets (icons, screenshots, styles)
- `releases/` — published build artifacts
  - `releases/android/bersihir-<version>.apk`
  - `releases/ios/bersihir-<version>.ipa`
  - `releases/<version>/manifest.plist` — iOS OTA install manifest

The site is published from the `main` branch via GitHub Pages.

## Installing

### Android (APK)

1. Download the latest `.apk` from the site.
2. On your device, allow **Install unknown apps** for your browser/file manager.
3. Open the downloaded file to install.

### iOS (IPA)

iOS does not allow installing arbitrary `.ipa` files. Use one of the following:

- **OTA install** — open the `itms-services://` link on the download page from Safari. The device must be registered in our Apple Developer provisioning profile (ad-hoc) or use an Enterprise/TestFlight build.
- **Sideload** — install via Xcode, AltStore, or Sideloadly using your own Apple ID.
- **TestFlight** — preferred for invited testers; see the TestFlight link on the page.

> Ad-hoc builds only run on devices whose UDID is registered. Send your UDID to the team to be added to the next build.

## Publishing a new build

1. Drop the new artifact into the matching folder:
   - Android → `releases/android/bersihir-<version>.apk`
   - iOS → `releases/ios/bersihir-<version>.ipa` plus a generated `manifest.plist`
2. Update the version, changelog, and download links in `index.html`.
3. Commit and push to `main`. GitHub Pages will redeploy automatically.

For iOS OTA, `manifest.plist` must reference the **HTTPS** URL of the `.ipa` and match the bundle identifier and version of the build.

## Repository

- Source: https://github.com/BERSIHir/bersihir-download
- App source (private): see the BERSIHir engineering workspace.

## License

Build artifacts are © BERSIHir and distributed for authorized testers only. Do not redistribute.
