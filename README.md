## ‼️ New submission proccess
Please note that from 🗓️ **01.01.24**, new Safe App submissions will first have to go through a [new pre-assessment form](https://docs.google.com/forms/d/e/1FAIpQLSeN2m94-jvGjvUF9MpZSkwxGPPjNz7QKZj9h9kMVXvnNdp2Mg/viewform?usp=sf_link).

Do not create GitHub issues directly without submitting that from, otherwise they will not be accepted. Thank you!

---

# Gnosis Safe default apps list

This is a small project to generate and build the default apps list for Gnosis Safe

## Getting started

These instructions will get you to get a valid apps list to load in Gnosis Safe

### Installing and running

Install dependencies for the project:
```
yarn install
```

To launch a local instance for dev purposes:
```
yarn start
```

### Building

Generate an instance of the list:
```
yarn build
```

### Configuring

To update the list configuration you have to modify the file at `config/appList.js`. To configure an app two parameters are mandatory:

 - `url`: An URL to fetch the resource. If it's using an IPFS link the following pattern should be used: `${process.env.REACT_APP_IPFS_GATEWAY}/QmUXF1yVGdqUfMbhNyfM3jpP6Bw66cYnKPoWq6iHkhd3Aw`
 - `networks`: An array of supported networks. For convenience the enumerated object can be used to set it in a more friendly way. ex: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY]
