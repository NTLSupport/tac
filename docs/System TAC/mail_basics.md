---
sidebar_position: 1
displayed_sidebar: systemSidebar
---

# Mail Basics

## What is Email Hosting

Email hosting is basically a service in which your email messages and associated
files are all stored on a server. When an email is sent to your website’s domain
address, the email is routed through the internet and receives on the server where
emails are hosted.

When the email is landed on the server, the hosting provider (server
administrators) will determine which action to take (respond or ignore) bearing in
mind any spam filters, re-routing requests and if the sender is on any blacklist.
The email hosting can be on the same server that’s hosting your website, a server
managed by another hosting provider or two different servers managed by the
same hosting company.

However, email hosting providers might specialize in offering only email hosting
services, but mostly companies like in **Nayatel** offer bundled emails and web
hosting packages.

## How to check hosting provider

To check email hosting provider use mail.(domain)/webmail.(domain) **A record query** and then from mailing server IP we can identify hosting provider. 

![A record](https://cdn.discordapp.com/attachments/873108775907786762/950114751701209118/2022_03_06_338_x212_67.png)

Referring to above we can check the mailing server IP, in this case its Nayatel's IP that means emails are hosted at Nayatel end for mentioned domain.

Also, by using **MX** query we can identify email hosting provider from mailing server.

![MX query](https://cdn.discordapp.com/attachments/873108775907786762/950115547322920970/2022_03_06_638_x425_68.png)

Moreover, Mx preference value shows the preference order in case of multiple mailing servers are used for same domain for backup. The preference value **“0”** shows first preference, **“5”** shows second preference and **“10”** shows third preference.

## Types of mail hosting

### General Purpose Server

In this service Nayatel provides email hosting on servers that are responsible for multiple services other than email hosting like web hosting also. Helios1, Helios3
and Web1 i-e our standalone servers are being used for this case.

### Dedicated Mail Server

The service for dedicated email solution is Nmail and locally hosted dedicated email
servers are used to run this service. In this service administrative rights to manage
email accounts are given to customer like other email hosting but Nmail is more
reliable and efficient email solution and offers better user experience. The holders
of this service can have email accounts in following manner
yourname@yourdomain.com or yourname@nayatel.pk

## Email flow

![Email Flow](https://cdn.discordapp.com/attachments/873108775907786762/950117083096711218/2022_03_06_471_x214_69.png)

The emails can either be sent/recieved through webmail or client installed in end
user device. The email program (the client or webmail) basically combines the text
we wrote (the body) with the recipient, subject, date, and time (the header) and
then sends the message off to an email server by using the Simple Message Transfer
Protocol (SMTP).

When the email is received at the outgoing server (SMTP Server) it fetches the
recipients information from header and then through DNS (MX query) it finds the
recipients mailing server. For example, email was sent to Test@hotmail.com then
server looks up hotmail.com and then the email hops around the internet and
SMTP server makes connection with recipient’s mailing server and email is handed
over to it. Now At the recipient end, the server takes the email and stuffs it into a
mailbox for the intended user. 

Furthermore, now user can access emails via
webmail or some client (e.g Outlook) using POP/ IMAP.


## Protocols

### SMTP

- Stands for **Simple Mail Transfer Protocol**
- It is the standard protocol for sending emails across the Internet.
  - With SMTP you are sending, relaying, or forwarding messages from a mail client
- Port 25 and 587 or 465 for SSL
- (Outlook) to a receiving email server. A sender will use an SMTP server to carry out
the process of transmitting an email message.
### POP

- Stands for **Post Office Protocol**
- Used to retrieve emails from a remote server
  - It is a standard mail protocol used to receive emails from a remote server to a local
email client (Outlook)
- port 110 or 995 for SSL
- Allows you to download email messages on your local computer and read them
even when you are offline.
- When you use POP to connect to your email account, emails are downloaded
locally and removed from the mailing server, which reduces the storage space of
mailbox.
- If you want to access your account from multiple devices that may not be the
best option for you.
### IMAP

- Stands for **Internet Message Access Protocol**
- Used to access emails from a remote server
  - IMAP is also a mail protocol used for accessing email on a remote web server from
a local client
- port 143 or 993 for SSL
- IMAP allows simultaneous access by multiple clients. This is why IMAP is more
suitable for you if you’re going to access your email from different devices or if your
emails are managed by multiple users.
## NSLOOKUP

NSLOOKUP => Name Server Lookup

NSLOOKUP is a command line tool used to obtain the domain name to IP mapping or any other DNS record

It can be used to obtain results using any DNS server

It can be used to obtain any type of DNS record by changing the query type

![](https://cdn.discordapp.com/attachments/873108775907786762/949762697401085972/Picture13.png)

## NMAIL

Nmail is a dedicated email solution designed for businesses of all sizes

Features:
yourname@yourdomain.com or yourname@nayatel.pk

Sync email, contacts and calendars on Web, Outlook and Mobile Devices*

Locally hosted dedicated email servers

Seamless Migration

Administrative Rights to manage email accounts

24x7 Support

*Only for Standard and Enterprise packages



## Spam Emails & Anti Spam Solution

## Email Queuing

Email Queuing is for customers who have deployed their own email servers, if their server goes down their emails will be queued on our server and delivered as it comes back online


## Email Relaying

Relaying is the act of accepting a message from a person’s email client software (customer) and forwarding it towards its destination (any server e.g. Gmail, Hotmail etc.). 

To restrict the relay access to only those we know, we can use

IP addresses of our clients 
OR
Authentication before forwarding the message 
     (username and password based)

## Email Error Codes

1. 550 Your email address is blacklisted:

Sender email address is blacklisted on relaying server or frontend. Please contact systems for confirmation of blacklisting.

2. Mailbox disabled, not accepting messages:

Ask the customer to contact recipient as recipient mailbox might be disabled or any restriction at recipient server end

3. Mailbox quota exceeded:
Recipient mail box is exceeded, ask the customer to contact recipient

4. Message rejected because of unacceptable content:

Recipient server has rejected email based on content of email. Ask the customer to check links or attachments in email

5. A DNS error: the host server for the recipient’s domain name cannot be found:

Issue in DNS records of recipient domain, ask the sender to contact recipient

6. processing error (Too many received headers - possible loop ):

Issue in routing at systems end, contact systems in this case

