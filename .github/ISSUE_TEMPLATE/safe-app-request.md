---
name: Safe app request
about: Create a request to add, remove or update a Safe app
---

<!--
## ‼️ New submission proccess
Please note that from 🗓️ **01.01.24**, new Safe App submissions will first have to go through a [new pre-assessment form](https://forms.gle/PcDcaVx715LKrrQs8).

Do not create GitHub issues directly without submitting that from, otherwise they will not be accepted. Thank you!

---

BEFORE SUBMITTING:
    1. Please search to make sure this request has not been opened already
    2. Please make sure that you followed the instructions [in the README](https://github.com/5afe/safe-apps-list/blob/main/README.md)
    3. Your app is available on production chains and is production ready.
-->

### Entry type
<!--
delete those that don't apply
-->
   - New addition
   - Update
   - Removal

### App info

URL:

Manifest.json URL:

Name:

Description:

Icon (PNG, 180x180):
It's minified via https://tinypng.com: yes/no

Homepage:
Twitter:
GitHub:
Discord:

App supports batching multiple transactions via Safe: yes/no

### Supported networks
<!--
This field is optional, except when adding a new app. An app can be compatible with one or many networks.
Just list the ones that are compatible.
-->
    - Mainnet
    - Goerli
    - Gnosis Chain
    - Energy Web Chain
    - Volta

### Revision checks
<!--
Please tell us if you did any of these checks
-->
 - [ ] Used smart contracts were audited.
 - [ ] You have implemented the app using the [Safe Apps SDK](https://github.com/safe-global/safe-apps-sdk)
 - [ ] Your Safe App includes a `manifest.json` file at the root [with the required data](https://github.com/5afe/safe-apps-list/blob/main/README.md)
 - [ ] The app can be loaded as a custom Safe App in the Apps section of [https://app.safe.global](https://app.safe.global).
 - [ ] The app auto-connects to the Safe as a wallet
 - [ ] It doesn't try to connect to the browser wallet (e.g. MetaMask)
 - [ ] You are able to trigger and execute one transaction with a Safe.
 - [ ] RPC requests are optimized (not triggering many requests in a very short time period).

### Audit document
<!--
Link to smart contracts audit.
-->

### Code for review
<!--
Link to git repository where the app is published.
-->

### Team information

Company:

Official website:

Point of contact:

Email/Telegram:
