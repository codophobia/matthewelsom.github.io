---
title: Create a Simple Facebook Share Button in Jekyll
tags: [blog, article, facebook, share, api, tutorial, web, developers, app, jekyll]
image: facebook_share.png
---

Allowing users to share your articles on social media is a common blog feature. Here is how you add a simple button to your webpage so users can share the page using the Facebook API. 

Firstly, head to the [Facebook Developer](https://developers.facebook.com) portal and create an app. This is not essential, but provides helpful  tracking and statistics.

![Facebook Developers](blog_img/facebook_developers.png)

Make sure you add an *Contact Email* address and an *App Domain* in the *Settings* area, one that is done, click on *Status & Review*, and make the app **Live**.

![Facebook App Live](blog_img/facebook_app_live.png)

If you dont set up the app then you can't track the number of article shares/likes/comments etc. Everything else works though.

Now that the app is setup we can add the Facebook Share link to your site...

Let's create an include called `share.html`, inside it we will place the code for our share buttons, remember we are doing this in Jekyll so we use variables to get the canonical url and page title.

{% highlight html %}{% raw %}
<div class="share-widget">
  <a href="https://www.facebook.com/sharer.php?u={{ site.url }}/{{ page.url }}&title={{ page.title }}" title="Share on Facebook" target="_blank">Share on Facebook</a>
</div>
{% endraw %}{% endhighlight %}

Use `{% raw %}{% include share.html %}{% endraw %}` to call this include at the bottom of your blog post template (after the post content). 

Finally, lets add some [Open Graph](https://developers.facebook.com/docs/sharing/webmasters#markup) Meta Data to our blog pages, this will create that pretty Share dialog and (if you made the app) turn on the share tracking/analytics.

In your page `<head>` add the following: 

{% highlight html %}{% raw %}
<meta property="fb:app_id" content="{{ site.facebook_app_id }}" />
<meta property="og:url" content="{{ site.url }}/{{ page.url }}" />
<meta property="og:type" content="article" />
<meta property="og:title" content="{{ page.title }}" />
<meta property="og:description" content="{{ page.content | markdownify | strip_html | strip_newlines | truncate: 300 }}" />
<meta property="og:image" content="{{ site.url }}/{{ page.image }}" />
{% endraw %}{% endhighlight %}

The properties are fairly self explainitory, the full list with detailed explainations can be found [here](https://developers.facebook.com/docs/sharing/webmasters#markup) - again we use [Jekyll variables](http://jekyllrb.com/docs/variables/) so each page generates the correct information automatically.

We have also used the `site.facebook_app_id` variable, this relates to a custom variable stored in the `config.yml` file which stores our app id data:

{% highlight yaml %}{% raw %}
#Facebook Sharing
facebook_app_id: 0011038251882641
{% endraw %}{% endhighlight %}

Use the [Facebook URL Debugger](https://developers.facebook.com/tools/debug/) to preview how your share dialog will look based on the meta data you have provided.