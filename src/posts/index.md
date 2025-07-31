---
title: Blog
layout: base.njk
pagination:
  data: collections.posts
  size: 5
  alias: postslist
---

# Blog Posts

<ul class="post-list">
  {% for post in postslist -%}
    <li>
        <a href="{{ post.url }}">
        <h2>{{ post.data.title }}</h2>
        </a>
        <time datetime="{{ post.date }}">{{ post.date | dateDisplay }}</time>
        {{ post.data.excerpt }}
      </li>
  {%- endfor %}
</ul>

<nav class="pagination">
  {% if pagination.previousPageLink %}
    <a class="pagination__item" href="{{ pagination.previousPageHref }}">Previous</a>
  {% else %}
    <span class="pagination__item">Previous</span>
  {% endif %}
  |
  {% if pagination.nextPageLink %}
    <a class="pagination__item" href="{{ pagination.nextPageHref}}">Next</a>
  {% else %}
    <span class="pagination__item">Next</span>
  {% endif %}
</nav>
