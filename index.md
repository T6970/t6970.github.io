---
layout: default
title: T6970 - Home
---

# T6970.github.io
### Site under construction

This is a site with aim of complete freedom, without locking anything behind paywalls or walls of ads.

## Explore

- [**Blog**](/blog/)
- [**App Releases**](/app/)

## Latest Posts

{% assign latest_posts = site.posts | slice: 0, 3 %}
{% for post in latest_posts %}
- [{{ post.title }}]({{ post.url }}) – {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

## About 

placeholder 
