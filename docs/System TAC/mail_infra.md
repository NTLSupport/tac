---
sidebar_position: 2
displayed_sidebar: systemSidebar
---

# Mail Infrastructure

## Mail Routing

Outgoing and Incoming mail routing. For example, someone decides to send an email from an outlook client. It will go to SMTP cluster where it will perform **MX** query to see who is the authorized server to handover the email. Then it forms a SMTP connection via port 25(for example) and it goes to Gmail servers over the internet. The same happens while incoming, except while incoming, the **MX** query will output Antispam server

**Incoming mail of Nayatel Domain**

Anti-spamming Server > mail.nayatel.com

**Outgoing mail of Nayatel Domain**

Nayatel Email Server > Email Relayed via SMTP server > Recipient Mail Server

![mailrouting](/img/mailrouting.svg)


## Outgoing Mails

The figure below shows the Nayatel infrastructure and work flow in case of
outgoing mails.

![](https://cdn.discordapp.com/attachments/873108775907786762/950042264867053608/2022_03_06_705_x681_64.png)

![Outgoing mails](/img/outgoing.svg)

The front and back end servers are dedicated for Nmail service.

While Helios1, Helios3 and Web1 are general purpose servers used for email
hosting.

Furthermore, in case of Nmail users can have access to their mailbox which are on
the backend servers and when they compose the email, the respective backend
server forwards it to front end and it hands it over to one of SMTP gateway.
However, in case of general email hosting user’s mailbox are on one of the
standalone servers (Helios1, Helios3, Web1) and when user compose the email,
these servers directly hands over the email to respective SMTP gateway.


Incoming 

![](https://cdn.discordapp.com/attachments/873108775907786762/950042493934764072/2022_03_06_711_x557_65.png)
![Incoming mails](/img/incoming.svg)

The above figure shows the Nayatel infrastructure and work flow in case of
incoming mails. When the email is sent to user of Nmail the MX records of that
domain refers to IP of front end server and email will be land on it and then it is
handed over to respective backend server. However, in case of general email
hosting, emails will directly land on respective server (Helios1, Helios3, Web1).


Incoming with Antispam solution

![](https://cdn.discordapp.com/attachments/873108775907786762/950042705721954324/2022_03_06_717_x523_66.png)
![Incoming mails](/img/incoming_antispam.svg)

The above figure shows the Nayatel infrastructure and work flow in case of
incoming mails with anti-spam solution. In this case the particular domain will have
MX records referring to our anti-spam servers (mta1.nayatel.com,
mta2.nayatel.com) and then these servers forward email to respective mailing
server

## Nayatel Email Servers
### Front-End:
- mail.domainname.com (203.82.48.116)

### Back-End:
- Be2.nayatel.net.pk (203.82.48.139)	[All Customers]
- Be3.nayatel.net.pk (203.82.48.140) 	[Shifa Dedicated Mail Server]
- Ecp.nayatel.net.pk (203.82.48.141)	[ECP Dedicated Mail Server]
- Be5.nayatel.net.pk (203.82.48.142)	[All Customers]

### NAYAtel Server:
- Mail.nayatel.com (203.82.48.115)	[NAYAtel emails running]
