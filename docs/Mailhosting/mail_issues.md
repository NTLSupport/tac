---
sidebar_position: 3
---

# Mail Issues

## Sending issue:

As per work flow of emails discussed earlier mainly while troubleshooting the
sending issue of emails we check

- Ports and outgoing mailing server entered in client app.
- If same issue exists for webmail, issue is probably with IP (i-e blacklisted at server
end).
- In addition to that in case of Nmail we check SMTP sending specifically for
mentioned email accounts whether it is allowed or blocked.

## Receiving issue:

- If quota exceed customer is unable to receive emails.
- Check Mx records for that domain.
- Then Check mailing server entered in Client App (outlook), must be same as Mx
records.

## Email not receiving from specific domain:

- Is bounce back received to the sender?
- Are emails being received on webmail?
- If receiving email hosted on Helios, then we will verify from the Track delivery
option.
- If receiving email is hosted on Axigen servers (Nmail), then we will consult Systems
team to verify the logs.

## IP Blocked at server end:
- Customer will be unable to access and send emails if IP is blocked at server end.

## Outlook Configurations:

- Check outgoing and incoming servers entered.
- Username and password must be correct.
- Ports entered for outgoing /incoming mails must be correct as per defined
protocol (POP/IMAP).
- Test Email account settings to verify

## Emails are not receiving at specific domain sent from nayatel
- We will check the logs of our SMTP server whether the emails are being handed
to recipient’s mailing server or not.
- If our SMTP has delivered the email to destination mailing server, then issue is not
at Nayatel end
- If SMTP has didn’t delivered he email to recipient end then might be our SMTP’ s
IP


## Cases to discuss with systems team
- To verify emails landed on anti-spam server
- To verify server logs while TS (e.g mail delivery record in case of Nmail)
- SMTP sending blocked for any account of Nmail
- SSL required for email hosting
- When our SMTP server’s IP is blocked at mailing server of some domain and
bounce back appears, in that case we forward the message to systems.
