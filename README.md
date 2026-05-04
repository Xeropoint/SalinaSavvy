# Salina HM Training — Android App + Home-Screen Widget

Native Android app, fully offline, with a 4×6 home-screen widget that shows today's workout, fueling target, and race countdown.

## What you have here

A folder of source code. **It is not yet an APK.** The APK is what you install on your phone. There are two ways to turn this code into an APK:

- **The cloud way (recommended, no software to install):** Push these files to GitHub, and GitHub builds the APK for you for free. You download it. ~10 minutes start to finish.
- **The local way:** Install Android Studio (~5 GB), open this folder, and click Build. Only useful if you also want to customize things later.

This README walks through the cloud way step-by-step, assuming you have never used GitHub before.

---

## Path A — Build the APK using GitHub (recommended)

### Step 1 · Make a free GitHub account

1. Go to [github.com](https://github.com) in your web browser.
2. Click **Sign up** in the top right.
3. Fill in: an email address, a password, a username (anything is fine; it'll be in your URLs). Pick the **Free** plan when asked.
4. Verify your email (GitHub emails you a code).

That's it. You now have a free account that can host code and build apps for you.

### Step 2 · Make a new "repository" (a folder on GitHub)

A "repository" (or "repo") is just a project folder hosted on GitHub. Each project = one repo.

1. Once signed in, click the **+** button in the top right corner → **New repository**.
2. **Repository name:** `salina-hm-android` (or anything — no spaces).
3. **Description (optional):** "Salina Crossroads HM training app."
4. Choose **Private** unless you want it public. Either works for what we're doing.
5. Leave everything else as default.
6. Click **Create repository** at the bottom.

You'll land on a mostly-empty page that says "Quick setup". Don't follow any of those instructions yet — we're going to upload files instead.

### Step 3 · Upload these files to your new repo

On that "Quick setup" page, look for the line:

> uploading an existing file

It's a clickable link in the middle of the page. Click it.

(If you can't find it, the direct URL is: `https://github.com/<your-username>/<your-repo>/upload/main`)

You'll get a page with a big drag-and-drop area.

1. **Open the `android` folder** on your computer (the folder this README is inside) in File Explorer / Finder.
2. **Select ALL the files and folders** inside (Ctrl+A on Windows, Cmd+A on Mac). You should see a bunch of folders (`app`, `gradle`, `.github`) and files (`build.gradle.kts`, `gradlew`, `gradlew.bat`, `gradle.properties`, `settings.gradle.kts`, `.gitignore`, this `README.md`).

   ⚠️ **Important:** Make sure hidden files are visible. The `.github` folder starts with a dot and is hidden by default — without it, GitHub won't build the APK.
   - **Windows:** In File Explorer, click **View → Show → Hidden items**.
   - **Mac:** In Finder, press **Cmd + Shift + .** (period) to toggle hidden files.

3. **Drag everything into the GitHub upload area** in your browser. Wait — uploading takes a minute or two, especially the `gradle/wrapper/gradle-wrapper.jar` file.
4. Once everything has finished uploading, scroll to the bottom of the page. In the **Commit changes** section, you can leave the default message ("Add files via upload") or type your own.
5. Click the green **Commit changes** button.

You should now see all the files listed in your repo.

### Step 4 · Watch GitHub build your APK

1. Click the **Actions** tab at the top of your repo page.
2. You should see a workflow named "**Build APK**" already running (the icon will be a yellow circle that spins). The build typically takes 5–8 minutes the first time.
3. Click into it to watch progress if you want, or just wait. When it's done, the icon turns into a green checkmark.
4. If something goes wrong (red X), click into the failed run, click on the "Build Android APK" job, and look at the error. The most common issue is a missing file from the upload — re-upload anything that's missing and push again.

### Step 5 · Download the APK

Once you have a green checkmark:

1. Click into the completed workflow run (still in the Actions tab).
2. Scroll to the **Artifacts** section at the bottom of the page.
3. You'll see two files: **SalinaHM-release-apk** and **SalinaHM-debug-apk**. Click **SalinaHM-release-apk** to download — it gives you a `.zip` file.
4. **Unzip it.** Inside is a single file called something like `app-release.apk`. That's your APK!

### Step 6 · Install the APK on your Android phone

Android won't install random APKs by default — you have to allow it. Once.

1. **Get the APK onto your phone.** Several options:
   - Email it to yourself, then open the email on your phone and tap the attachment.
   - Upload to Google Drive, then open Drive on your phone, tap the file, then tap **Download**.
   - Plug your phone into your PC with a USB cable, drag the APK to your phone's Downloads folder, then unplug.
2. **Open the file on your phone.** Use the **Files** app (or **Downloads** app), find `app-release.apk`, and tap it.
3. **First time only:** Android pops up a warning saying installing apps from this source is blocked. Tap **Settings**, toggle on **Allow from this source**, then back out and tap the APK again.
4. Tap **Install**. You may also see a Play Protect warning ("This app wasn't checked by Play Protect") — this is normal for sideloaded apps. Tap **Install anyway**.
5. When done, tap **Open**, or find "Salina HM" in your app drawer.

### Step 7 · Add the widget to your home screen

1. **Long-press an empty area** on your Android home screen (just hold your finger on the wallpaper for ~1 second).
2. A menu pops up. Tap **Widgets**.
3. Scroll until you find **Salina HM**. Tap it (or long-press → drag).
4. The widget is **4 cells wide × 6 cells tall** by default. It will snap into place.
5. To resize after placing: long-press the widget → drag the corner handles.
6. The widget shows today's workout and updates automatically every night just after midnight. Tapping anywhere on it opens the full app.

---

## Path B — Build locally with Android Studio (optional)

Only do this if you also want to be able to tweak the code yourself.

1. Install **Android Studio** from <https://developer.android.com/studio>. It's a free download (~5 GB after install).
2. Launch Android Studio. On the welcome screen, click **Open**.
3. Browse to and select this `android/` folder. Click **Open**.
4. Android Studio chews on it for a few minutes ("indexing", "syncing"). Get coffee.
5. When sync finishes, plug in an Android phone via USB (with USB debugging enabled in Developer Options) **OR** use **Run → Run 'app'** to start an emulator.
6. To get an APK file: **Build → Build Bundle(s) / APK(s) → Build APK(s)**. After it finishes, click the popup notification's **locate** link.

---

## Updating the plan later

If you ever want to change the plan (move a workout, adjust mileage, etc.):

1. Edit `app/src/main/java/com/salinahm/PlanData.kt` directly. It's a regular text file — open in any editor.
2. Find the week and day you want to change, edit it.
3. **If you used GitHub (Path A):** open your repo on github.com, navigate to the file, click the pencil icon (✏️) at the top-right of the file, edit, and click **Commit changes**. GitHub will rebuild the APK automatically. Download the new APK from Actions, install over the old one (your widget keeps working).
4. **If you used Android Studio (Path B):** Save the file, then **Build → Build APK(s)** again.

---

## Troubleshooting

**The Actions tab on GitHub doesn't show a workflow.** The `.github` folder didn't upload (it's hidden by default on Mac/Windows). Re-do Step 3 with hidden files visible.

**Build fails with "Gradle wrapper jar is missing".** Same issue — `gradle/wrapper/gradle-wrapper.jar` didn't upload. Make sure all files in `gradle/wrapper/` are present in your repo before running.

**"App not installed" when tapping the APK on Android.** Usually means an older version is installed under a different signing key. Uninstall any previous Salina HM app, then re-install.

**Widget shows the wrong day.** Open the app once — it forces an immediate widget refresh. Or wait until tomorrow morning when the daily auto-refresh fires.

**Widget is too big / too small.** Long-press the widget → drag corner handles to resize. Min size is roughly 3×4 cells, max is roughly 5×7.

**App opens but is blank.** The bundled web assets didn't get included. Verify `app/src/main/assets/` contains `index.html`, `app.js`, `plan.js`, and `styles.css` in your repo on GitHub.

---

## What's inside (for the curious)

- `app/src/main/java/com/salinahm/MainActivity.kt` — the activity that hosts a WebView showing the bundled offline plan UI.
- `app/src/main/java/com/salinahm/TrainingWidget.kt` — the home-screen widget logic. Builds the RemoteViews each refresh.
- `app/src/main/java/com/salinahm/PlanData.kt` — the entire 27-week training plan, baked in as Kotlin data. Auto-generated; if you edit, this is the source of truth.
- `app/src/main/java/com/salinahm/PlanLogic.kt` — utility functions (find today, format dates, etc.).
- `app/src/main/java/com/salinahm/WidgetUpdater.kt` — schedules a daily refresh via AlarmManager.
- `app/src/main/java/com/salinahm/BootReceiver.kt` — re-arms the daily refresh after reboot / time change.
- `app/src/main/res/layout/widget_layout.xml` — the visual structure of the 4×6 widget.
- `app/src/main/res/xml/widget_info.xml` — widget metadata (size, resize behavior).
- `app/src/main/assets/` — the bundled offline web app (used inside MainActivity's WebView).
- `.github/workflows/build-apk.yml` — the GitHub Actions recipe that builds the APK.

The app makes **zero network calls** of any kind. Everything is bundled. It works in airplane mode.
