---
title: Blog
layout: post.njk
permalink: /posts/
---

# Blog Posts

<ul>
  {% for post in collections.posts %}
    <li>
        <a href="{{ post.url }}">
        <h2>{{ post.data.title }}</h2>
        </a>
        <time datetime="{{ post.date }}">{{ post.date | dateDisplay }}</time>
        <p>{{ post.data.excerpt }}</p>
      </li>
  {% endfor %}
</ul>
