# Activity 06 — Screen Navigator

> **🛠️ Stack for this lesson** — Expo SDK 54 / React Native 0.79 · runs in Expo Go on a real phone.
> 📥 Template: [/learn/m1/template/activity-05-screen-navigator](/learn/m1/template/activity-05-screen-navigator)

A two-tab app with a Home stack that drills into a Detail screen and a Settings tab you'll build from scratch. The navigation containers, the Home screen, and the `NavigationCard` component are wired up — you'll register the Detail screen, push data into it, read that data on arrival, and assemble the Settings tab around `useState` and `Switch`.

**Time:** ~50 minutes · **Concept:** Concept 05 — Stack and Tab Navigation

---

## What You'll Build

| # | TODO | File |
|---|------|------|
| 1 | Register the Detail screen inside the Home stack | `App.js` |
| 2A | Send the tapped card's data to the Detail screen | `screens/HomeScreen.js` |
| 2B | Read that data on the Detail screen and render it | `screens/DetailScreen.js` |
| 3A | Build the Settings screen — two switches and an info card | `screens/SettingsScreen.js` |
| 3B–D | Wire SettingsScreen into the bottom-tab navigator with an icon | `App.js` |

The Home stack already has its header styling; the bottom tabs already render the Home tab. Read the surrounding code, infer where each TODO belongs, and write it.

## Run It

```bash
npm install --legacy-peer-deps
npx expo start
```

Scan the QR code with **Expo Go** on a phone that's on the same Wi-Fi as your computer, or press `w` to preview in a browser.

## Verify

Your activity is done when, on a real device:

- [ ] The Home tab shows three cards; tapping any of them pushes the Detail screen.
- [ ] The Detail screen shows the correct id, name, and description for the card you tapped.
- [ ] The header back arrow (and Android hardware back button) returns to Home with no flash or error.
- [ ] The bottom tab bar shows two tabs with distinct icons: Home and Settings.
- [ ] The Settings tab renders a screen with two functioning switches.
- [ ] Toggling either switch updates the displayed state immediately.

## Stretch

Pick one and write what you tried in your reflection:
- Add a third tab "About" with a static info screen and matching icon.
- Persist the Settings switch values across app reload using AsyncStorage.
- Add a header right button on the Detail screen that shares the item's name via the OS share sheet.

## 📱 Device Evidence (required, 30% of grade)

You'll only get full marks if the activity runs on a real device — not just Expo's web preview or simulator.

Submit a `device-evidence/` folder containing:

> **📓 Where this lives now:** open your lesson note for this activity.
> Click **Take Notes** at the top of the lesson page if you don't already have a note —
> it creates one titled `<Lesson title> — <COURSE>` with a scaffold pre-filled from
> the lesson headings. Add an H2 section titled **`Device Notes`** to that note and put
> your work there. The note persists across devices and is queryable by the AI Tutor.
>
> 💡 **Tip:** open the AI Tutor while viewing your note and ask
> *"help me draft my Device Notes for this activity"*. The Tutor will append a draft to your note;
> you can drag it into the **Device Notes** section if it lands elsewhere.

1. **`screenshot-portrait.png`** — One full-screen screenshot from your real device, portrait orientation, with the device's status bar visible (so the clock + battery prove it's a real device).
2. **`recording.mp4`** — 30–60 second screen recording showing at least 2 screens with tab/stack transitions, including the **hardware back button on Android** (or swipe-back gesture on iOS). Use iOS Screen Recording (Control Center → ⏺) or Android `adb shell screenrecord`.
3. **Device Notes in your lesson note** — instead of a local `DEVICE-NOTES.md` file, add an H2 section titled **`Device Notes`** to your lesson note (click **Take Notes** at the top of the lesson page if you don't have a note yet). Cover, in 80–150 words:
   - What device did you test on? (model + OS version)
   - What worked first try?
   - What broke, and what error message did you see? (Quote the exact error.)
   - What did you only notice on a real device that you'd have missed in the simulator?

Grading: 70% feature works in code, 30% device evidence. "I tested in Expo Go web" is not device evidence.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in this README under your TODO commits. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, a way the simulator and real device differ.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — a test you ran, a screenshot you took, a behavior you watched on the device.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/m1/certification](/learn/m1/certification)** and submit your activity link. Include 1–2 screenshots of the running app on your device.

<!-- claude-template-fix: readme-v3 -->

<!-- claude-template-fix: notes-migration-v1 -->
