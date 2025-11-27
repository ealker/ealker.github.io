---
layout: page
title: Blogroll
---

Blogs I enjoy reading.

{% assign sorted_blogs = site.data.blogroll | sort: "name" %}

<ul class="blogroll-list">
  {% for blog in sorted_blogs %}
  <li class="blogroll-item">
    <h3><a href="{{ blog.url }}" target="_blank" rel="noopener">{{ blog.name }}</a></h3>
    {% if blog.description %}
      <p class="blogroll-description">{{ blog.description }}</p>
    {% endif %}
    {% if blog.categories %}
      <div class="blogroll-tags">
        {% for category in blog.categories %}
          <span class="tag-link">{{ category }}</span>
        {% endfor %}
      </div>
    {% endif %}
  </li>
  {% endfor %}
</ul>
