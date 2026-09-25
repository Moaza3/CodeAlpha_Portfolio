# Moaza — Web Developer Portfolio

A personal portfolio site designed to feel alive — animated stats, a scroll-driven timeline, and a bit of personality baked into every section.

| | |
|---|---|
| 🔗 **Live Site** | [moaza3.github.io/CodeAlpha_Portfolio](https://moaza3.github.io/CodeAlpha_Portfolio/) |
| 📦 **Internship** | CodeAlpha — Frontend Development |
| 🎯 **Goal** | Build a polished, single-page portfolio using nothing but vanilla HTML/CSS/JS |

## Why I built this

Most beginner portfolios are static — a photo, a list of skills, a contact form. I wanted mine to feel a little more alive: numbers that count up as you scroll, cards that tilt when you hover, and an actual feedback system so visitors can rate the site instead of just looking at it.

Everything here — layout, animation, and interactivity — is hand-written. No templates, no UI kits.

## What's inside

| Section | What it does |
|---|---|
| **Hero** | Gradient-animated name/role text, floating background shapes, custom cursor glow |
| **About** | Expandable bio ("Read more") + animated stat counters (internships, projects, tools) |
| **Education** | Simple, clean academic card |
| **Skills** | Icon grid, rendered dynamically from a JS array |
| **Experience** | Timeline built entirely from a JS data object — easy to update without touching HTML |
| **Projects** | Auto-generated project cards with themed gradients and tags |
| **Feedback** | Visitors can leave a 1–5 star rating + comment, with a running average shown live |
| **Contact** | Direct links to email, GitHub, and LinkedIn |

## Built with

`HTML5` · `CSS3` (custom properties, Grid, keyframes) · `JavaScript` (vanilla — no frameworks) · `Google Fonts`

Everything — including the projects list, timeline, and skills grid — is rendered dynamically from JavaScript objects, so updating content later just means editing an array, not the HTML.

## Run it yourself

```bash
git clone https://github.com/Moaza3/CodeAlpha_Portfolio.git
cd CodeAlpha_Portfolio
Then just open `index.html` — no build step, no dependencies.

## A few things I'd improve next

- Persist feedback ratings using localStorage or a small backend (currently resets on reload)
- Add a dark/light mode toggle
- Break the JS into smaller modules as the content grows

**Moaza**
Frontend Development Intern @ CodeAlpha

[GitHub](https://github.com/Moaza3) · [LinkedIn](https://www.linkedin.com/in/moaza-yaqoob-7a94a6401/) · moazafree@gmail.com
