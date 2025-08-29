---
layout: default
title: Blog
permalink: /blog/
---

# The Blog

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span>— {{ post.date | date: "%B %d, %Y" }}</span>
  </li>
{% endfor %}
</ul>
