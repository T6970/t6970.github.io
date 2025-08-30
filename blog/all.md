---
layout: default
title: All Blog Posts
---

# All Blog Posts

A complete archive of posts from the [Blog Discussions](https://github.com/USERNAME/REPO/discussions/categories/blog):

<ul>
{% for discussion in site.data.blog %}
  <li>
    <a href="{{ discussion.html_url }}">{{ discussion.title }}</a>
    <br>
    <small>Posted on {{ discussion.created_at | date: "%B %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>
