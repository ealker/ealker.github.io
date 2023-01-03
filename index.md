---
layout: default
title: Elliot Alker
---

Hello. I'm Elliot, a software engineer living and working in London. 

## Recent Posts 

{% for post in site.posts limit:3 %}
<ul>
    <li>{{ post.date | date: '%B %Y' }} - <a href="{{ post.url }}"> {{post.title }}</a></li>
</ul>
{% endfor %}

## Permenant Pages

- [/uses](uses)
- [Now](now)