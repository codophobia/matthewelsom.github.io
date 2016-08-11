---
title: Display Instagram Posts on a Webpage with Instafeed.js
tags: [app, html5, javascript]
image: instagram_feed.png
---

{{ site.data.alerts.update-blank }}
This article has been <a href="#update-user-details">updated</a>.
{{ site.data.alerts.update-end }}

Instafeed is a simple javascript plugin that enables you to add Instagram photos to your website. I have my Instagram feed configured [here](/about), here's how I set it up.

You'll need to register your website as an application with Instagram and get an Access Token before you start - Instagram has recently changed the process, but it is quite straight-forward, just follow the steps [here](/blog/request-access-token-instagram.html).

### Setup

I wanted to create an Instagram Feed on my About page - the feed would pull the latest *Images* with respective *URLs* from my IG account, I also wanted to show the *Like* count and *Comment* count to go with each image.

I decided to use a jekyll `include` to templatize the feed; that basically means the feed code is seperated form my page code making it easier to update or relocate at a later date.

The include used on my About page: 

{% highlight liquid %}{% raw %}
{% include instafeed.html %}
{% endraw %}{% endhighlight %}

### Installation

- To start, download the Instafeed.js plugin [from Github](https://github.com/stevenschobert/instafeed.js) and include it in your website assets
- Above the script add `<div id="instafeed"></div>`, the plugin will automatially look for this element and fill it with your thumbnails.
- Add a link to the `instafeed.html` file:
{% highlight html %}
<script type="text/javascript" src="path/to/instafeed.min.js"></script>
{% endhighlight %}
- Lastly, we need to add a script that tells the plugin to pull *my* photos and respective information:
  - **userId**: This is your unique user identifier, you can check yours [here](http://jelled.com/instagram/lookup-user-id).
  - **clientId**: Follow [this post](/blog/request-access-token-instagram.html) to get your Client ID.
  - **accessToken**: Follow [this post](/blog/request-access-token-instagram.html) to get your Access Token.
  - **resolution**: Controls the size of the image returned - `standard_rsolution` is the largest size at 612x612px.
  - **template**: See below.
  - **sortBy**: Sort the images in a set order.
  - **limit**: Maximum number of images to display; *Note* that if your application has not been approved by Instagram the limit is always 20.
  - **links**: Automatically wrap images with a link to Instagram.

{% highlight html %}
<script type="text/javascript">
  var userFeed = new Instafeed({
    get: 'user',
    userId: '623597756',
    clientId: '02b47e1b98ce4f04adc271ffbd26611d',
    accessToken: '623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72',
    resolution: 'standard_resolution',
    template: {% raw %}'<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /><span>{{likes}}{{comments}}</span></a>'{% endraw %},
    sortBy: 'most-recent',
    limit: 32,
    links: false
  });
  userFeed.run();
</script>
{% endhighlight %}

### Adding a Template

The template function allows you to customise the output for each image. A full list of template options are [available here](https://github.com/stevenschobert/instafeed.js#templating).

For my template I wrapped each image inside an `<a>` tag that linked to the original photo (in a blank window), and included the Like and Comment scores for each photo.

If you are building your site in Jekyll make sure you wrap your template with the `{{ "{% raw " }}%}` and `{{ "{% endraw " }}%}` tags - this prevents the liquid language from being interupted by Jekyll.

### Sample Feed 

Here is a sample feed, it shows my last 4 Instgram posts


<p data-height="300" data-theme-id="0" data-slug-hash="zrrrLN" data-default-tab="result" data-user="matthewelsom" class='codepen'>See the Pen <a href='http://codepen.io/matthewelsom/pen/zrrrLN/'>Sample Instagram Feed with Instafeed.js </a> by Matthew Elsom (<a href='http://codepen.io/matthewelsom'>@matthewelsom</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Update: User Details

Need to show your user details? You can use the {% raw %}`{{model.user}}`{% endraw %} fuction to do that.

- Username: {% raw %}`{{model.user.username}}`{% endraw %}
- Profile Picture: {% raw %}`{{model.user.profile_picture}}`{% endraw %}
- Full Name: {% raw %}`{{model.user.full_name}}`{% endraw %}


<p data-height="265" data-theme-id="0" data-slug-hash="oLJGpL" data-default-tab="result" data-user="matthewelsom" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/matthewelsom/pen/oLJGpL/">Sample Instagram Feed with Instafeed.js  with User Details</a> by Matthew Elsom (<a href="http://codepen.io/matthewelsom">@matthewelsom</a>) on <a href="http://codepen.io">CodePen</a>.</p>