---
title: Getting Started with Jekyll & Github Pages
tags: [jekyll, blog, web, liquid, markdown, hosting]
image: github_jekyll.png
---

Static websites are nothing new, neither are the generators that can be used to quickly deploy a site. So why did I decide to make the switch?

According to [StaticGen](https://www.staticgen.com/) the most popular (stars and forks) ststic generator is [Jekyll](http://jekyllrb.com) - Here a mix of Markdown and Liquid languages are compiled to create a website that can be quickly deployed to GitHub Pages.

Thats the basic approach for all static generators; write in simple plain text, run it through a generator engine, and voila, you have yourself some lovely HTML which you can distribute anywhere.

This site is compiled using [Jekyll](http://jekyllrb.com), and is hosted for **free** with [GitHub Pages](https://pages.github.com/).

###Why did I choose this development method?

Firstly I like to keep source code on Github... And I was manually transferring code to my server via FTP [(Cyberduck)](https://cyberduck.io). 

Unfortunately, I never managed to setup automated deployment or a webhook to do the transfer, and honestly I get a bit lost when trying to figure that out. However, I do know my way round my server and I like to have full control of where things go.

**Jekyll** provides me with templating features, this cuts down on the lines of code I need to write, that means I can spend more time on content.

**Github Pages** provides free, fast hosting and eliminates the manual FTP step in my previous worflow. - All the code is version controlled and can be tracked in Git.

So, using Jekyll to simplfy the deployment of my site, coupled with the built-in hosting that Github Pages provides has radically improved my deployment workflow. 

###Setting up Github Pages Hosting via Github

This part is super easy, creating a repository named *username*.github.io, where *username* is your Github username is pretty much all that is required - The content inside the `master` branch of my repository *matthewelsom*.github.io will automaticaly be displayed at the [matthewelsom.github.io](http://matthewelsom.github.io) URL. 

![Published!](blog_img/github_repo.png)

Every commit to the master will be reflected pretty much instantly on the site.

Goodbye FTP. Hello `git push`.

###Getting a Custom Domain

Of course I wanted to retain my [matthewelsom.com](http://matthewelsom.com) domain name, so I added a `CNAME` file to the repository and added an `Alias` record to the domain via my DNS provider.

This handles traffic redirects and makes your site accessible from your custom URL. There is a good [tutorial here](https://help.github.com/articles/adding-a-cname-file-to-your-repository/).

My repository is now being published at my custom domain. 

![Published!](blog_img/published_repo.png)


###Installing Jekyll

This is an ever expanding topic, so I will aim to post more about this in the future.

Jekyll is [Ruby](http://www.ruby-lang.org/en/downloads/) and [Node JS](http://nodejs.org/) based. I have found that it is very easy for Mac users to pick up and run with, for Window-ers, installation can be a little more hazardous, the [documentation](http://jekyllrb.com/docs/installation/) here provides a very good step-by-step installation guide. 