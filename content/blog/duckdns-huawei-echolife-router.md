---
title: "How to use DuckDNS on an Huawei EchoLife Router"
excerpt: 'DuckDNS is a service that allows users to turn their dynamic IP address into a subdomain which they can use to access services on open ports.'
coverImage: '/blog/duckdns-huawei-echolife-router/screenshot-01.png'
date: '2022-09-22T05:35:07.322Z'
author:
  name: Stefan Todorovic
  picture: '/assets/headshot.jpg'
ogImage:
  url: /blog/duckdns-huawei-echolife-router/screenshot-01.png'

---

DuckDNS is a service that allows users to turn their dynamic IP address into a subdomain which they can use to access services on open ports. The following is the method I used to configure DuckDNS to automatically update using the ISP's Huawei EchoLife router. DuckDns is not supported by default on these routers, so the following is the steps that I took to make it work. At the time of writing this, the system has been updating for 3+ months without fail. 

More information about DuckDns can be found on their site: [https://www.duckdns.org/about.jsp](https://www.duckdns.org/about.jsp)
## Setting up the service

1.  Go to [https://www.duckdns.org](https://www.duckdns.org) and create an account or sign in.
2. Create a new subdomain (Enter the subdomain you wish and click 'add domain'
![](/blog/duckdns-huawei-echolife-router/screenshot-01.png)

3. Copy the token
4. Log into your EchoLife ONT
5. Navigate to the "Network Application" tab
![](/blog/duckdns-huawei-echolife-router/screenshot-02.png)

6. Select 'DDNS Configuration' on the left side then click 'New'
![](/blog/duckdns-huawei-echolife-router/screenshot-03.png)

7. Input the settings for DuckDNS
![](/blog/duckdns-huawei-echolife-router/screenshot-04.png)

     Check the "Enable DDNS" box
      Select the correct "WAN NAME" in this case "2_VOIP_IPTV_INTERNET_R_VID_557"
      Input your full DUCK DNS domain name (that you created in step 2)
      "Service Provider" is set to "dyndns-custom"
      "Host of the service provider" is set to "www.duckdns.org"
      "Service port" is set to 80
      "User Name" is set to "nouser"
      "Password" is set to the "token" from duckdns.org
8. Click Apply
9. After several moments, you should see the service appear under DDNS Service State as "UP"
![](/blog/duckdns-huawei-echolife-router/screenshot-05.png)

10.  Your IP address should now be visible in the duckdns dashboard.

![](/blog/duckdns-huawei-echolife-router/screenshot-06.png)
