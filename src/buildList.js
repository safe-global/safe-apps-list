const { version } = require('../package.json')
const staticAppsList = require('./apps.js')

module.exports = function buildList () {
  const parsed = version.split('.')

  return {
    name: "Gnosis Safe default app list",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    logoUri: 'logo-uri',
    keywords: ['gnosis', 'safe', 'default', 'app', 'list'],
    apps: [...staticAppsList()]
  }
}