---
title: Blog
layout: page
category: blog
---
{% assign sorted_blog = site.posts | where: "category", "blog" %}
{% for post in sorted_blog %}
<div class="post">
  <h3 class="post-title"><a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3>
  <p class="post-date">{{ post.date | date: '%d %B %Y'}}</p>
  <p class="post-content">{{ post.content | strip_html | truncate: 300 }} <a href="{{ site.baseurl }}{{ post.url }}">Read More</a></p>
  <ul class="tags">
  {% assign approvedTags = site.data.tags.tags %}
  {% for tag in post.tags %}
    {% if approvedTags contains tag %}
      <li>{{ tag }}</li>
    {% endif %}
  {% endfor %}
  </ul>
</div>
{% endfor %}