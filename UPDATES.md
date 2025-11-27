# Site Updates - November 2025

This document explains the new features added to your site.

## 1. Tagged Links System

**What it does:** Allows you to share interesting links with tags and dates

**How to add a new link:**
1. Open `_data/links.yml`
2. Add a new entry at the top (most recent first):

```yaml
- title: "Your link title"
  url: "https://example.com"
  description: "Brief description"
  tags: [tag1, tag2, tag3]
  date: 2025-11-27
```

**View links:** Visit `/notes/links` on your site

## 2. Recent Activity Feed on Homepage

**What it does:** Automatically shows your latest content on the homepage

**What appears:**
- Last 3 blog posts
- Last 3 links shared
- Automatically updates when you add new content

**No action needed** - it updates automatically!

## 3. Page Timestamps

**What it does:** Shows "Last updated" date on pages

**How to add to a page:**
Add this to the front matter of any page:

```yaml
---
layout: page
title: Your Page Title
last_updated: 2024-11-27
---
```

**Remember to update the date** whenever you edit a page!

## 4. RSS Feed

**What it does:** Lets people subscribe to your updates

**Feed URL:** `https://[yoursite.com]/feed.xml`

**What's included:**
- Last 10 blog posts
- Last 10 links shared

**RSS link** appears in the footer automatically

## Quick Workflow Tips

### To share a new link:
1. Edit `_data/links.yml`
2. Add entry at the top
3. Save and push to GitHub
4. It appears on homepage + links page + RSS feed

### To write a blog post:
1. Create file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Save and push to GitHub
3. It appears on homepage + blog page + RSS feed

### To update a note page:
1. Edit the note file in `/notes/`
2. Update the `last_updated` date in front matter
3. Save and push to GitHub

## Minimal Maintenance

The beauty of this system:
- Everything is in plain text files
- No database needed
- Recent updates show automatically
- Low friction for quick additions

Keep your digital garden growing! 🌱
