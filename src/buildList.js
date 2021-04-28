const { version } = require("../package.json")

const safeAppsConfig = require("../config/appsList")
const fetchAppInfo = require("./utils/fetchAppInfo")

const getAppsList = async () => {
  if (!process.env.REACT_APP_IPFS_GATEWAY) {
    throw Error("REACT_APP_IPFS_GATEWAY should be defined")
  }

  manifestInfo = []

  for (const app of safeAppsConfig) {
    const appInfo = await fetchAppInfo(app)

    manifestInfo.push(appInfo)
  }

  return manifestInfo
}

const buildList = async () => {
  const parsed = version.split(".")

  const appsList = await getAppsList()

  return {
    name: "Gnosis Safe default apps list",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    logoUri: "logo-uri",
    keywords: ["gnosis", "safe", "default", "app", "list"],
    apps: [...appsList],
  }
}

module.exports = buildList
