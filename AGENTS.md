# Architecture rules
- Keep subscription validation and delivery branches in a shared module so tests cover the exact behavior used by the form.
- Configure subscription delivery through one endpoint constant; an empty endpoint opens an email draft and never represents confirmed submission.
- Reuse the localized email-draft notice for both contact and subscription forms so neither mailto flow reports confirmed delivery.
