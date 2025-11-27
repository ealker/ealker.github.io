---
layout: page
title: Links
last_updated: 2025-11-27
---

Interesting links I've found around the web.

{% assign sorted_links = site.data.links | sort: "date" | reverse %}
{% for link in sorted_links %}
<div class="link-item" style="margin-bottom: 2em; padding-bottom: 1em; border-bottom: 1px solid #f0f0f0;">
  <h3 style="margin-bottom: 0.5em; margin-top: 0;">
    <a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.title }}</a>
  </h3>
  {% if link.description %}
  <p style="margin-bottom: 0.5em; color: #525050;">{{ link.description }}</p>
  {% endif %}
  <div style="font-size: 0.9rem; color: #767676;">
    <span style="margin-right: 1em;">{{ link.date | date: "%d %B %Y" }}</span>
    {% if link.tags %}
      {% for tag in link.tags %}
        <span class="tag-link" style="display: inline-block; padding: 0.25rem 0.5rem; margin-right: 0.25rem; font-size: 0.8rem; background-color: #f0f0f0; border-radius: 4px;">{{ tag }}</span>
      {% endfor %}
    {% endif %}
  </div>
</div>
{% endfor %}