---
layout: default
title: Elliot Alker
---

## Hello. I'm Elliot, a software engineer based in London. 

### What is this?

This site is my [portfolio](/projects), [blog](/blog), resume and [digital garden](https://maggieappleton.com/garden-history). Feel free to read [more about me and my work](/about).

### What have I been writing?

{% for post in site.posts limit:3 %}
<ul>
    <li><a href="{{ post.url }}"> {{post.title }}</a> <i>{{ post.date | date: '%B %Y' }}</i></li>
</ul>
{% endfor %}


### What am I up to right [now](/now)?

### What do I [use](/uses)?

### Where should I go?

Good question! Here are a few [sites worth reading](/links).
