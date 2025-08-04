---
title: Blog
layout: base.njk
permalink: /posts/
---

# Blog Posts

<ul class="post-list">
  {% for post in collections.posts -%}
    <li>
        <time datetime="{{ post.date }}">{{ post.date | dateDisplay }}</time>
        <a href="{{ post.url }}">
        <h2>{{ post.data.title }}</h2>
        </a>
        {{ post.data.excerpt }}
      </li>

{%- endfor %}

</ul>

<nav class="pagination">

{% if pagination.previousPageLink %}
<a class="pagination__item" href="{{ pagination.previousPageHref }}">Previous</a>
{% endif %}

{% if pagination.previousPageLink and pagination.nextPageLink %}
<span class="pagination__separator">|</span>
{% endif %}

{% if pagination.nextPageLink %}
<a class="pagination__item" href="{{ pagination.nextPageHref }}">Next</a>
{% endif %}

</nav>
