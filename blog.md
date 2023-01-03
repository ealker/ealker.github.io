---
layout: page
title: Blog
---

{% for post in site.posts %}
<ul>
    <li>{{ post.date | date: '%B %Y' }}  - <a href="{{ post.url }}"> {{post.title }}</a> </li>
</ul>
{% endfor %}