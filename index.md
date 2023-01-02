---
layout: default
title: Elliot Alker
---

Hi, I'm Elliot.

## Recent Posts 

{% for post in site.posts limit:3 %}
<ul>
    <li><a href="{{ post.url }}"> {{post.title }}</a> <i>{{ post.date | date: '%B %Y' }}</i></li>
</ul>
{% endfor %}

## Permenant Pages

- [/uses](uses)
- [Now](now)