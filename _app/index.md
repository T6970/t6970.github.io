---
layout: default
title: Apps
---

# Apps & Releases

Welcome to the apps section. Below are the latest stable releases:

<ul>
{% for app in site.data.apps %}
  <li>
    <a href="{{ '/app/' | append: app.name | slugify | append: '/' | relative_url }}">{{ app.name }}</a>
    - v{{ app.version }}<br>
    {{ app.description }}
  </li>
{% endfor %}
</ul>
