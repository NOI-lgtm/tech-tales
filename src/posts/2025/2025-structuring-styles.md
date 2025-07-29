---
title: Organizing component architecture and structure in React
date: 2025-01-02
layout: post.njk
excerpt: With the new year beginning, I needed to set up a folder for this year’s posts. Having only worked with starter templates before, this was my first experience building from scratch. It led me to explore how 11ty manages categorized content.

---

As React applications grow, keeping your component architecture clear and maintainable is essential. A well-structured codebase makes collaboration easier, reduces duplication, and improves developer experience — especially in teams or when building scalable design systems.

This post shares how I organize components and visual structure in React, based on current best practices, including recent patterns influenced by modern frameworks like **Next.js**, **React Server Components (RSC)**, and **design systems**.

<br>

## 💡 Group by feature or domain

Rather than splitting everything into global folders like `components/`, `hooks/`, or `utils/`, I prefer grouping by **feature** or **domain**. This approach scales well and mirrors how users experience the app.

```javascript
src/
├── dashboard/
│   ├── components/
│   ├── hooks/
│   ├── index.js
│   └── DashboardPage.jsx
├── settings/
│   └── ...
├── shared/
│   ├── components/
│   ├── utils/
│   └── theme/
```

<br>

## 📦 Presentational vs Container Components

Although hooks have blurred the line between UI and logic, separating presentational components (focused on visuals) from containers (focused on logic/state) is still helpful — especially for reusability and testing.

```javascript
/components/
├── Button/
│   ├── Button.jsx
│   ├── Button.test.js
│   ├── button.module.css
│   └── index.js         # for clean imports
└── UserProfile/
    ├── UserProfile.jsx   # Presentational
    ├── useUserProfile.js # Data logic
    └── index.js

```

This setup supports co-location of styles, tests, and logic within the component’s folder.

<br>

## 🎨 Visual Hierarchy and Design Consistency

Organize UI layers from the page level down to atoms:

```
Pages → Layouts → Sections → Components → Elements

```

## Best practices:

- Use design tokens for consistent spacing, color, and typography.
- Build from a shared theme system (especially if using styled-components, Tailwind, or CSS Modules).
- Avoid deeply nested components when a flat composition will do.
- Define component boundaries based on reusability and context, not visuals alone.

<br>

## ⚙️ Modern Patterns in 2025

As of 2025, these trends continue to shape how teams structure React projects:

- **React Server Components (RSC)** via Next.js App Router encourages clear separation between server and client logic — keep non-interactive UI server-rendered when possible.
- **Co-location** of everything (styles, logic, stories, tests) is the norm.
- **Feature-first or route-first structures** scale better than global folders.
- **Atomic Design principles** are still useful for thinking in reusable parts, though not always implemented rigidly.
