---
title: "Building Frontends That Scale"
description: "Notes on the habits I use to keep React and Next.js products fast, maintainable, and easy to extend."
date: "2026-07-05"
category: "Engineering"
coverImage: "/profile.png"
coverAlt: "Maneesha Barandeniya portrait used as the cover image for frontend engineering notes"
tags:
  - React
  - Next.js
  - Frontend Architecture
featured: true
---

Scaling a frontend is less about adding more folders and more about making the important decisions obvious. The codebase should tell the next developer where data enters, where state lives, and which components own the user-facing flow.

## Keep the product flow visible

I prefer shaping interfaces around the workflows users repeat most often. Once the flow is clear, the component model becomes easier to defend: page-level components coordinate data, shared components stay reusable, and complex widgets hide their internal details behind a small API.

## Measure the real bottleneck

Performance work starts with evidence. In React and Next.js apps, the most useful fixes often come from reducing unnecessary client JavaScript, tightening API payloads, avoiding repeated derived work, and making loading states intentional.

## Design for change

The best frontend systems make future changes boring. Typed contracts, predictable layouts, and focused components help teams ship new features without turning every release into a rewrite.
