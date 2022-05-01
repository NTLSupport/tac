---
sidebar_position: 4
displayed_sidebar: systemSidebar
---

# Mail Tools

## Find Email Provider

A domain's email provider is the company listed in the domain's MX record. The email provider may be the same as the domain's hosting company, but could also be a separate company.

### Step 1 - Find MX Record

MX records point a domain's incoming email to the email provider responsible for processing those messages.

- Go to https://www.misk.com/tools/#dns
- Enter your **domain name** (i.e., example.com). Be sure to perform the lookup on the name your email is based on. For instance, if your email is you@example.com, you would perform a dns lookup on example.com (not www.example.com).
- Press **Enter** on your keyboard
- A list of all dns records for the name you entered will appear
- Look for the **MX** record and observe the name to the right of it, which is the domain's email provider (e.g., smtp.example.com). You can contact this company or the one listed as the nameservers in regards to the domain's email.

### Step 2 - IP Whois

In most cases, the MX record name from Step 1 above will indicate your email provider and you can stop there. However, in some cases the domain could have custom MX records that are based on the domain itself. In those cases, you'll need to perform a [dns lookup](https://www.misk.com/tools/#dns) on the hostname (the MX record) to find the email provider's IP address. Then, perform an IP [whois search](https://www.misk.com/tools/#whois) to find the company providing service for that IP address (the email provider).

- Copy the **Hostname** (e.g., smtp.example.com) for the MX record from Step 1 above
- Go to https://www.misk.com/tools/#dns and enter the copied **Hostname** (e.g., smtp.example.com)
- Press **Enter** on your keyboard
- Look for the **A record** and copy the IP address it is pointing to
- Go to https://www.misk.com/tools/#whois
- Enter the **IP Address** you just copied
- Press **Enter** on your keyboard
- The IP address' whois record will appear
- This will give you the name of the company responsible for your email service. You can contact this company or the one listed as the nameservers in regards to the domain's email.

## ICANN Lookup

If you can’t find your billing records, you can search for your domain host online. The Internet Corporation for Assigned Names and Numbers (ICANN) is a non-profit organization that collects domain information. Use the ICANN Lookup tool to find your domain host.

- Go to https://lookup.icann.org/lookup
- In the search field, enter your domain name and click **Lookup**.
- In the results page, scroll down to **Registrar Information**.
- The registrar is usually your domain host.

## Google DIG Tool

**Dig Google Apps Toolbox**

https://toolbox.googleapps.com/apps/dig/#ANY/


## MX toolbox

All of your MX record, DNS, blacklist and SMTP diagnostics in one integrated tool.  Input a domain name or IP Address or Host Name. Links in the results will guide you to other relevant tools and information.  And you'll have a chronological history of your results. 

https://mxtoolbox.com/SuperTool.aspx 

Here's a quick command to check the MX records of a domain;
```
nslookup -q=mx email.startupschool.org
```