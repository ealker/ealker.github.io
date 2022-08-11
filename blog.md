---
layout: page
title: /blog
---

{% for post in site.posts %}
<ul>
    <li><a href="{{ post.url }}"> {{post.title }}</a> {{ post.date | date: '%B %Y' }} </li>
</ul>
{% endfor %}


[Why?](https://sites.google.com/site/steveyegge2/you-should-write-blogs)