---
layout: default
title: Elliot Alker
---

## Hello. I'm Elliot, a software engineer based in London. 

### This site is my portfolio, blog, resume and digital garden.

[More about me and my work](/about.html)

### Recent Posts

{% for post in site.posts limit:3 %}
<ul>
    <li><a href="{{ post.url }}"> {{post.title }}</a> <i>{{ post.date | date: '%B %Y' }}</i></li>
</ul>
{% endfor %}


### What am I up to right [now](/now)?

### What do I [use](/uses)?

