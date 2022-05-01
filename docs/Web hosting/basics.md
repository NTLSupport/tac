---
sidebar_position: 1
---

# Service Flow

Welcome to the session about Webhosting 

## Learning Objectives

- Understanding [Domain Registration](https://docusaurus.io/).
- [Webhosting](https://docusaurus.io/docs/styling-layout)
- [Nmail Architecture](https://docusaurus.io/docs/search)
- [DNS hosting](https://docusaurus.io/showcase) troubleshooting
- [Eview](https://docusaurus.io/community/support) troubleshooting

## Domain Registration

- The process of registering a domain name, which identifies one or more IP addresses with a name that is easier to remember and use in URLs to identify particular Web pages 

- Right to use a domain name is delegated by domain name registrars which are accredited by the Internet Corporation for Assigned Names and Numbers (ICANN)

- Domain name registry:
 - Database of all domain names and the associated registrant information

- The person or business that registers domain name is called the domain name registrant.

- Nayatel purchases domains from **OnlineNIC** and **PKNIC** providers
All the **.pk** domains are normally registered for **2 years** while **OnlineNIC** domains are registered for **1 year**

- Time period can be changed depending on Customer’s requirement.


## Webhosting

## Daily Tasks of Webhosting

## Installation of WordPress
1. Download WordPress files from WordPress official website
2. Upload files using file manager
3. Create database and user using MySQL data base options
4. Update wp-config.php file

## WordPress errors
Unable to connect database
Blank page on website
Error of file size during upload on admin panel
Admin user password change ( ask developer to change from their end )



## Redirection of http to https
1. Go into redirects option in cPanel
![](https://cdn.discordapp.com/attachments/475611486996398121/949749064554123284/unknown.png)

2. Add redirection in cPanel as described in screenshot
![](https://cdn.discordapp.com/attachments/475611486996398121/949751431995474021/unknown.png)

## Installation of SSL on cPanel
1. Go into SSL/TLS option
![](https://cdn.discordapp.com/attachments/475611486996398121/949752052328849458/unknown.png)

2. Upload certificates in upload option

3. Click on install to activate the SSL certificate 
![](https://cdn.discordapp.com/attachments/873108775907786762/949752997091610644/2022_03_05_1218_x709_66.png)

## Guidance to customer about backups
1. Go to Files > Backup
![](https://cdn.discordapp.com/attachments/873108775907786762/949753687260155924/2022_03_05_954_x347_67.png)
![](https://cdn.discordapp.com/attachments/873108775907786762/949753962498777179/2022_03_05_1184_x857_68.png)
## PHP customization
Go to Software>MultiPHP INI Editor
![](https://cdn.discordapp.com/attachments/873108775907786762/949754166887190548/2022_03_05_959_x347_69.png)
You can change php settings e-g file size, postmax size, memory limit via php editor

To change php version of website, go to Software>**MultiPHP Manager**
![](https://cdn.discordapp.com/attachments/873108775907786762/949754739787169792/2022_03_05_954_x311_70.png)

## HTTP Error Codes

- 403: Check the permissions of working directory of website. Default working directory on cPanel is **Public_html**
![](https://cdn.discordapp.com/attachments/873108775907786762/949755423634903060/2022_03_05_384_x98_71.png)

- 404: Check if file is present on cPanel

![](https://cdn.discordapp.com/attachments/873108775907786762/949755724135796746/2022_03_05_598_x310_72.png)

- 500
1. Check if server is working fine, contact Systems department and confirm about status of services on server
2. If server is up, then check .htaccess file of website present in public_html folder 

![](https://cdn.discordapp.com/attachments/873108775907786762/949755907523375224/2022_03_05_440_x219_73.png)

## Nmail Architecture


## DNS hosting

A DNS hosting service is commonly provided by a domain name registrar, which often uses a backend server to provision services to Web hosting providers and ISPs
Name servers set against domain have zone file for the domain which contain all the records of zone
Type of Name servers:

- **Master DNS:**
Master DNS contains zone file of domain. Nayatel master DNS is **“ns.dsl.net.pk”**

- **Slave DNS:**
Slave DNS is just a backup server which is used to copy the same zone information's from the master servers. Slave DNS of Nayatel is **"ns1.dsl.net.pk"**

Caching DNS

All Nayatel caching DNS Servers cache the results of their queries
The Caching-only DNS server does not contain zone information or a zone database file 
The Caching-only server only contains information based on the results of queries that it has already performed
There are 4 caching servers of Nayatel Islamabad
All cache DNS are bind based

Previous Architecture
![](https://cdn.discordapp.com/attachments/873108775907786762/949756858887987280/2022_03_05_627_x368_74.png)

New Architecture
![](https://cdn.discordapp.com/attachments/873108775907786762/949757112966320128/Picture2.png)

## DNS Records
A record:
A record is used to point a domain or subdomain to an IP address

Cname record:
It maps an alias name to a true or canonical domain name. CNAME records are typically used to map a subdomain such as www or mail to the domain hosting that subdomain's content

MX record:
specifies the mail server responsible for accepting email messages on behalf of a domain name

SPF record:
Sender Policy Framework (SPF) is an email authentication method designed to detect forging sender addresses during the delivery of the email.

DNS Example Zone & RR’s
![](https://cdn.discordapp.com/attachments/873108775907786762/949759353760673882/Picture3.gif)

SOA
![](https://cdn.discordapp.com/attachments/873108775907786762/949759445339086878/Picture4.png)

Query via nslookup:
A record query:

![](https://cdn.discordapp.com/attachments/873108775907786762/949760337446576128/Picture5.png)

NS record query:

![](https://cdn.discordapp.com/attachments/873108775907786762/949760337262047292/Picture6.png)

MX record query:

![](https://cdn.discordapp.com/attachments/873108775907786762/949760337018753064/Picture7.png)

SPF records query:
![](https://cdn.discordapp.com/attachments/873108775907786762/949760336779706378/Picture8.png)

Domains are blocked on request of PTA on all our cache DNS servers
There is separate DNS blocking server
Domains blocked on PTA request must show A record mentioned in screenshot

![](https://cdn.discordapp.com/attachments/873108775907786762/949760336549011456/Picture9.png)

If any domain is blocked, please convey the same to customer and coordinate with core for unblocking of domain

## SSL

Secure Sockets Layer (SSL) is a standard security technology for establishing an encrypted link between a server and a client—typically a web server (website) and a browser, or a mail server and a mail client (e.g., Outlook)

SSL allows sensitive information such as credit card numbers, social security numbers, and login credentials to be transmitted securely

SSL secures millions of peoples’ data on the Internet every day, especially during online transactions or when transmitting confidential information

Key Features

Safety and convenience

Server authenticity

Automatic Client Authentication

SSL Affirms Your Identity

SSL Protects Data

Better Search Engine Ranking

SSL Improves Customer Trust

Site Seal and Padlock

What does it do?

An SSL certificate (more accurately called a TLS certificate), is necessary for a website to have HTTPS encryption. An SSL certificate contains the website's public key, the domain name it's issued for, the issuing certificate authority's digital signature, and other important information. 

Types of certificate

Rapid SSL certificate : 
A single-domain SSL certificate applies to one domain and one domain only. It cannot be used to authenticate any other domain, not even subdomains of the domain it is issued for.

Wildcard SSL certificate: 
Secures subdomains and main domain

Multi-Domain SSL Certificates: 
A multi-domain SSL certificate, or MDC, lists multiple distinct domains on one certificate. With an MDC, domains that are not subdomains of each other can share a certificate.

SSL Partners
Symantec Digicert
GeoTrust
Sectigo
RapidSSL


Nmail SSL

![](https://cdn.discordapp.com/attachments/873108775907786762/949761433632145448/Picture11.png)

Eview Workflow

![](https://cdn.discordapp.com/attachments/873108775907786762/949761588229984286/Picture12.png)

## Eview troubleshooting

- Is the plan assigned?
- Is he getting LIVE IP?
- 45 pool?
- URL Resolving ?