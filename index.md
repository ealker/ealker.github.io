---
layout: default
title: Elliot Alker
---

Hello. I'm Elliot, a software engineer living and working in London. 

This site is my [blog](/blog), resume and [digital garden](https://maggieappleton.com/garden-history). 

I've worked on a few [projects](/projects). 

You can see what I've been up to recently on my [now](now) page, and see what I use on my [/uses](uses) page. 

Feel free to read [more about me and my work](/about).


Here's what I've most recently written:

{% for post in site.posts limit:3 %}
<ul>
    <li>{{ post.date | date: '%B %Y' }} - <a href="{{ post.url }}"> {{post.title }}</a></li>
</ul>
{% endfor %}