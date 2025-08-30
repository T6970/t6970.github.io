---
layout: default
title: Blog
---

# The Blog – Recent Posts

This is the most recent updates of the Blog. 
For the complete archive, see [All Posts](/blog/all/).

<ul>
{% assign recent_posts = site.posts | slice: 0, 10 %}
{% for post in recent_posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> – {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>
