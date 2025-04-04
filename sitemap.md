---
layout: page
title: Sitemap
---

Human readable sitemap...

{% for page in site.pages %}
  {% assign is_tag_subpage = page.url | split: '/' %}
  {% if page.url != "/tags/" and is_tag_subpage[1] == "tags" and is_tag_subpage[2] != "" %}
    {%- continue -%}
  {% endif %}
  [{{ page.title }}]({{ page.url }})
{% endfor %}