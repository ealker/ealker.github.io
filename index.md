---
layout: default
title: Elliot Alker
---

Hello. I'm Elliot, a software engineer living and working in London. 

## Recent Posts 

{% for post in site.posts limit:3 %}
<ul>
    <li><a href="{{ post.url }}"> {{post.title }}</a> <i>{{ post.date | date: '%B %Y' }}</i></li>
</ul>
{% endfor %}

## Permenant Pages

- [/uses](uses)
- [Now](now)