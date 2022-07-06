---
layout: page
title: Blog
---

{% for post in site.posts %}
<ul>
    <li><a href="{{ post.url }}"> {{post.title }}</a> {{ post.date | date: '%B %Y' }} </li>
</ul>
{% endfor %}

(RSS Feed)[/feed.xml]