---
title: Set a Custom Homepage in SharePoint 2013 (Online) 
tags: [html, aspx, sharepoint, jekyll, static, enterprise]
image: sharepoint_aspx-html.png
---

I have been forced to learn my way around Microsoft's 'Flagship' sharing and collaboration platform over the past few weeks, but, I had issues when trying to load an HTML page in SharePoint Online...

I compiled a static website using Jekyll with the usual standard HTML, CSS, & JS files generated. The plan was to to deploy all of the files somehwere inside an internally used SharePoint Online site. 

However, SharePoint Online **doesn't support** using an html page as a site homepage. The files could be uploaded, however instead of loading the HTML pages in the browser they would download locally when you tried to load them.

Here's how I got it to work.

#### 'Add an App' to your SharePoint Site 

- Navigate to `Site Contents`, add a Document Library, set the library name and title to `APP`
- You should be able to access the library via this address: 

```
https://[COMPANY_NAME].sharepoint.com/[SITE_NAME]/APP/
```

![Add an App](blog_img/sharepoint_add_app.png)


#### Setup your Jekyll Config file(s)

I used two differnt `_config` files, one for local development, one for deployment

##### _config.yml

```
# URL Prefixing
siteurl: https://[COMPANY_NAME].sharepoint.com
environment: development
destination: APP
baseurl:
```

##### _config-prod.yml

```
# URL Prefixing
siteurl: https://[COMPANY_NAME].sharepoint.com
environment: sharepoint
destination: APP
baseurl: /[SITE_NAME]/APP
```






You need to add a few bits and pieces to help you generate the site more effectively, add the following to your `_config.yml` file.


Using the term flagship losely, I would say that SharePoint does provide a huge wealth of possibilities... but, if you are used to human-friendly code, or even logical CMS systems then look elsewhere.