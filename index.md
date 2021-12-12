---
layout: default
title: Elliot Alker
---

<div class="container">
  <div class="mx-l">
    Hi, I'm Elliot, a software engineer based in London. This site is my home on the web and contains a collection of my writing, projects, and photos.
  </div>
</div>



<div class="container">
<h2>Latest Posts</h2>
{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%Y" %}
    <ul>
        <li>
          <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
          <p>{{ post.date | date: '%B %Y' }}</p>
        </li>
    </ul>
{% endfor %}
</div>