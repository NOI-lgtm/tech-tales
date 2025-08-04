---
title: "Fixing unwanted empty tags in Eleventy"
date: 2025-01-05
layout: post.njk
excerpt: "While building this blog with Eleventy, I noticed something strange many empty HTML tags were being rendered between paragraphs."
---

While building this blog with **Eleventy**, I noticed something strange — many empty HTML tags were being rendered between paragraphs. As a first-time Eleventy user, I wasn’t sure why this was happening or how to fix it.

After some digging through the documentation, I realized that I didn’t actually need certain tags in my templates — at least not at this stage. The issue stemmed from how Eleventy processes content and collections.

Once I inspected my `eleventy.config.js`, I saw it already included a few helpful functions from the **Configuration API**. I simply needed to pass the correct folder path to the `addCollection`method. From there, the`collectionApi` handled everything I needed — without any additional hacks or complexity.

What surprised me most was how _easy_ and _fast_ it was to organize and display my content once I understood the basics. The experience gave me a new appreciation for how powerful Eleventy is, even with minimal configuration.

> If you're running into similar issues with Eleventy or are just starting out, don’t worry — most of the magic is already built in. A quick look into the config file can often reveal the solution.

## Links I found interesting

[Resources collected by GOV.UK](https://x-govuk.github.io/#projects)

[Is it Accessible? By Scott O'Hara](https://www.scottohara.me/blog/2016/10/15/is-it-accessible.html)

```

```
