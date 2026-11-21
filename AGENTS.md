# Architecture rules
- Keep the localized email-draft notice in the contact components so the contact form never reports confirmed delivery for a mailto flow.
- Render privacy sections from localized structured content through shared legal-document components so both languages have matching accessible tables and heading hierarchy.
- Reopen the existing cookie banner through the consent hook's shared change event, revoking granted signals before reset so footer controls do not require a reload or a second banner.
