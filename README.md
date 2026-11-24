# Influur Pulse · AI Campaign Generator + Analytics (concept)

The second iteration of my Influur campaign concept. Pulse keeps the prompt-first AI flow and adds **audience targeting** and a **campaign analytics** view, so a brand can see the expected impact of a generated campaign before launching it.

> Independent design-engineering concept inspired by Influur. Not an official Influur product. See the first iteration in [Influur](https://github.com/KiranChandY/Influur).

---

## ✨ What's new in Pulse

- **Audience targeting.** The AI input now asks you to choose a target audience before generating.
- **AI thinking states.** Clear "Thinking" and "Generating…" states make it obvious what the AI is doing.
- **Campaign analytics.** The result page adds estimated reach, engagement rate and campaign budget next to the generated campaign.
- **Same motion language.** Smooth, scroll-driven reveals carry over from v1.

## 🛠 Built with

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS, shadcn/ui (Radix primitives) |
| Motion | Framer Motion |
| Prototyping | v0, deployed on Vercel |

## 📁 Structure

```
app/
  page.tsx            # prompt, platform and audience selection
  result/page.tsx     # generated campaign + analytics
components/
  animated-ai-chat.tsx  # AI prompt input with thinking states
  menu-bar.tsx          # top navigation
  card/                 # result cards and grid
```

## 🚀 Run locally

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

## 🧠 Design notes

Iteration 1 answered "what campaign should I run?". Pulse answers "is it worth it?". Adding analytics right next to the creative keeps the decision on one screen instead of sending people to a separate dashboard.

---

Designed and built by **[Kiran Chand Yellamelli](https://github.com/KiranChandY)** · [Portfolio](https://kiranchandy.framer.website) · [LinkedIn](https://www.linkedin.com/in/kiran-chandy/)
