---
title: A Living Styleguide made with Jekyll
tags: [scss, styleguide, playbook, jekyll, style, guide, living, livingstyleguide.cc]
image: jekyll_living_styleguide.png
---

{{ site.data.alerts.update-blank }}
<h4>Jump Straight to the Tool</h4>
<a href="http://livingstyleguide.cc">http://LivingStyleguide.cc</a>
{{ site.data.alerts.update-end }}

There are a lot of really great styleguide methods, tools and examples out there... I struggled to find one that was easy to quickly get into, without a load of installation, and, was flexible enough to use on a wide variety of projects.

[Pattern Lab](http://patternlab.io) is kind of seen as the gold-standard when it comes to documenting styles and patterns that follow some form of the atomic design approach - but I am not a big fan of PHP, and I found it super difficult to customize the interface.

##### [Pattern Lab by Brad Frost & Dave Olsen](http://patternlab.io)
![Pattern Lab]({{ site.baseurl }}/blog/blog_img/pattern_lab.png)

This learning-curve, or lack of customize-ability was the case for many a tool I found listed on [styleguides.io](http://styleguides.io/tools.html). While there are a lot of good ones out there, I always found myself looking for something that could be used with my current set-up, for me, that means Jekyll-based.

I decided to roll my own to get exactly what I wanted.

#### What I wanted to build: 

- Use only Jekyll as a pre-requisit
- A very simple method of building HTML based components/patterns and scss styles
- Tracking the maturity of patterns
- Add documentation for developers, designers and pattern approvers
- Create sample pages that show patterns in use with real content, without the use of (what can be messy) variables
- Lastly, a wrapper that is unobtrusive and easy to visually customize

#### What I got: 

- Some basic [Design Principles](http://livingstyleguide.cc/docs/00-get-started/design-principles.html)
- [Simple installation](http://livingstyleguide.cc/docs/00-get-started/designers-developers.html) with documentation separated from patterns 
- [Pattern Tracking](http://livingstyleguide.cc/docs/00-get-started/maturity.html), measuring the maturity of UI components
- Simple [scss architecture](http://matthewelsom.com/blog/simple-scss-playbook.html) included

#### All the code is free for you to reuse on [LivingStyleguide.cc](http://livingstyleguide.cc).

___

##### Living Styleguide Homepage

![LivingStyleguide.cc]({{ site.baseurl }}/blog/blog_img/livingstyleguide_home.png)

##### Pattern Example

![Pattern Example]({{ site.baseurl }}/blog/blog_img/livingstyleguide_pattern.png)

##### Pattern Maturity
![Pattern Maturity]({{ site.baseurl }}/blog/blog_img/livingstyleguide_maturity.png)

I would love to know what other people think about styleguide tools, what works for you?  Drop me a comment below.