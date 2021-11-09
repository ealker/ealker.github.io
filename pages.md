---
layout: page
title: Pages
---

All of the sites permalinks. 

{% for page in site.pages %}

[{{ page.title }}]({{ page.url }})

{% endfor %}