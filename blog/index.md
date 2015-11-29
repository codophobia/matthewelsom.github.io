---
title: Blog Coming Soon
layout: page
category: blog
---
{% assign sorted_blog = site.posts | sort: 'title' | where: "category", "blog" %}
{% for post in sorted_blog %}
<h3 class="title"><a href="{{ site.baseurl }}{{ project.url}}" title="{{ post.title }}">{{ post.title }}</a></h3>
<p class="post.date">{{ post.date | date: '%d %B %Y'}}</p>

<p class="content">{{ post.content | truncate: 100 | strip_html }} <a href="{{ site.baseurl }}{{ project.url}}">Read More</a></p>

<ul class="tags">{% for tag in post.tags %}<li>{{ tag }}</li>{% endfor %}</ul>
{% endfor %}