---
title: Requesting an Access Token from Instagram
tags: [api, instagram, token, app, research, web]
image: instagram_access_token.png
---

Instagram recently changed their API, introducing new restrictions and a permissions process. I had to re-register my Instagram client and get a new Access Token to use the API to show my own Instagram Feed [here](/about).

###Registering the Client

First I needed to register my application with [Instagram](https://www.instagram.com/developer/), in my case I am registering my website and I will be using a javascript plugin called [instafeed.js](http://instafeedjs.com/) to call the API and retrieve my images. 

- Log in to the [Intragram Developer portal](https://www.instagram.com/developer/)
- Select **Register a new Client**
- Fill out the form (see the sample below)
  - **Application Name**: I used my top level domain name, but this can be anything you choose as long as it does not contain 'insta', 'gram', 'IG' or 'Instagram'
  - **Description**: Again, anything is ok, but it is best to outline what your application will do
  - **Company Name**: I don't have a company, so I registered myself
  - **Website URL**: The URL of my website
  - **Valid Redirect URIs**: This is the place where users will be redirected after logging in to your application. *Note*, nobody will be loggin into the application so I have just used my TLD so this app will work on all levels below that
  - **Privacy Policy**: I don't have one of those, so again I just used my URL
  - **Contact Email**: Make sure you add a valid URL

All of the fields are mandatory, so make sure you fill them all in.

![Register a New Client ID](blog_img/register_instagram_client.png)

Finally, switch to the **Security** tab and deselect the 'Disable implicit OAuth' checkbox, then hit **Register**.

![Security Tab](blog_img/security_tab.png)

Once that is done, you should see the client registered.

![Registerd Client](blog_img/registered_client.png)

It is important to note that your client is operating in [**Sandbox**](https://www.instagram.com/developer/sandbox/) mode at the moment - that means that '*data is restricted to sandbox users and the 20 most recent media from each sandbox user*'

To switch the status of the client to **Live**, you need to submit the client for approval from the **Permissions** tab by editing the client.

Here you will need to provide supporting information to Instagram about how the API will be used. 

###Client-Side Authentication (Authorizing and Getting the Token)

To retrieve data via the API you will need to use an Access Token, this is a unique token speific to a user. 

There are a couple of ways to gte the token (explained [here](https://www.instagram.com/developer/authentication/)), as my API call is pure javascript and does not require a server I can use the simplier method. 

**Step One:**

```
https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
```

1. Paste the above URL into your browser
2. Replace **CLIENT-ID** with your client's generated ID
3. Replace **REDIRECT-URI** with the redirect URI you added to your client
4. Load the URL

**Step Two:**

```
http://your-redirect-uri#access_token=ACCESS-TOKEN
```

1. The URL will load and you will see the Access Token included in the page URL
2. Copy the **ACCESS-TOKEN** from the URL for use in your javascript application

That's it, you now have all the tokens, ids, and clients in place to run your client-side (e.g. Javascript) application that will call your Instagram data.