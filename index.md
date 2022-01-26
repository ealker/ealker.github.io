---
layout: default
title: Elliot Alker
---

#### Hi, I'm Elliot, a software engineer based in London. This site is my home on the web and contains a collection of my writing, projects, and photos.


### Recent Posts

{% for post in site.posts limit:3 %}
<ul>
    <li><i>{{ post.date | date: '%B %Y' }}</i><a href="{{ post.url }}"> {{post.title }}</a></li>
</ul>
{% endfor %}