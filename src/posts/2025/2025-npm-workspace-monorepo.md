---
title: "NPM workspace monorepo setup using stencil and storybook"
date: 2025-11-16
layout: post.njk
excerpt: "Key esstentials to remember when working with monorepo with npm workspace..."
---

I encountered multiple issues and got confused many times while trying to setUp a monorepo without any third party tools like turbo, lerna or Nx. This is purely because, I want to limit the usage of third party tool and in general to experiment. So, here are the key essentials to remember when starting monorepo especially when you need storybook.

    1. Always follow monorepo package folder structure based on you rewquirements

    2. Start with main root folder and the package.json should look like this:

```js
{
  "private": true,
  "workspaces": ["core", "docs", "packages/*"]
}
```

    3. Naming workspace folders depends on you application needs. In the code block above, it is creating 3 different projects that is controlled by the main root. The current example of monorepo is for the ui library.

    4. After, you setUp the main root folder. Now it is time to generate workspace projects by using the commands in terminal.

```bash
npm init -y
npm pkg set name="@project-name/docs"
```

    5. You can use npm command to change the name of the package using pkg set name this allows to edit or update name without leaving terminal
    6. Install workspace specific packages using workspace arguments to the npm command for example:

```bash
npm install --workspace=@project-name/docs \
@storybook/cli@8.6.14 \
@storybook/web-components@8.6.14 \
@storybook/web-components-vite@8.6.14 \
@storybook/addon-essentials@8.6.14
```

    6. Use npm install in root folder and by default npm installs everything in the root if workspace argument is not provided. By mistake if it installs in the root then, remove and reinstall in the correct workspace.

    8. At last install dependencies for the entire monorepo using:

```bash
npm install
```
