---
layout: default
title: Blog
---

# The Blog

Here are the ten most recent posts from our [Blog Discussions](https://github.com/t6970/t6970.github.io/discussions/categories/blog):

<ul>
{% for discussion in site.data.blog limit:10 %}
  <li>
    <a href="{{ discussion.html_url }}">{{ discussion.title }}</a>
    <br>
    <small>Posted on {{ discussion.created_at | date: "%B %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>

<p><a href="/blog/all">View all posts →</a></p>
