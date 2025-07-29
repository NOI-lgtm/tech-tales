---
title: Blog
layout: base.njk
permalink: /posts/
---

# Blog Posts

<ul class="post-list">
  {% for post in collections.posts -%}
    <li>
        <a href="{{ post.url }}">
        <h2>{{ post.data.title }}</h2>
        </a>
        <time datetime="{{ post.date }}">{{ post.date | dateDisplay }}</time>
        {{ post.data.excerpt }}
      </li>
  {%- endfor %}
</ul>
