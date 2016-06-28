---
title: Sitemap
layout: page
category: sitemap
---
View this page in [.xml]({{ site.baseurl}}/sitemap.xml) format.

{% assign sorted_pages = site.pages | sort: 'url' %}
{% assign sorted_blog = site.posts | sort: 'url' | where: "category", "blog" %}
{% assign sorted_portfolio = site.posts | sort: 'url' | where: "category", "portfolio" %}
<h4>matthewelsom.com</h4>
<ul>{% for page in sorted_pages %}{% if page.exclude != true %}
  <li><a href="{{ site.baseurl }}{{ page.url | remove: "index.html" }}">{{ page.category | capitalize }}</a></li>{% endif %}{% endfor %}
</ul>
<h4>Blog</h4>
<ul>{% for post in sorted_blog %}{% if post.exclude != true %}
  <li><a href="{{ site.baseurl }}{{ post.url | remove: "index.html" }}">{{ post.title}}</a></li>{% endif %}{% endfor %}
</ul>
<h4>Portfolio</h4>
<ul>{% for project in sorted_portfolio %}{% if project.exclude != true %}
  <li><a href="{{ site.baseurl }}{{ project.url | remove: "index.html" }}">{{ project.title}}</a></li>{% endif %}{% endfor %}
</ul>