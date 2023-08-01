---
layout: default
title: Elliot Alker
---

I'm Elliot, a software engineer living and working in London. 

This site is my **[blog](/blog)** and [digital garden](https://maggieappleton.com/garden-history). 

I've worked on a few [projects](/projects). 

You can see what I've been up to on my **[now](now)** page, see what I use on my **[uses](uses)** page, and view all this site's pages on the **[sitemap](sitemap)**. 

Here's some posts that I've recently published:

{% for post in site.posts limit:3 %}
<ul>
    <li>{{ post.date | date: '%B %Y' }} - <a href="{{ post.url }}"> {{post.title }}</a></li>
</ul>
{% endfor %}