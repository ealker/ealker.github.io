---
layout: page
title: /blog
---

{% for post in site.posts %}
<ul>
    <li><a href="{{ post.url }}"> {{post.title }}</a> {{ post.date | date: '%B %Y' }} </li>
</ul>
{% endfor %}