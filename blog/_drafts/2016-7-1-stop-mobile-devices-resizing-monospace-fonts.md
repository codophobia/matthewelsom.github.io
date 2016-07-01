---
title: How to stop mobile devices from scaling monospace fonts
tags: [jekyll, tags, blog, liquid]
---

http://code.stephenmorley.org/html-and-css/fixing-browsers-broken-monospace-font-handling/

pre,
code {
  font-family: monospace, monospace;
  font-size: 1em;
  -webkit-font-smoothing: auto;
}