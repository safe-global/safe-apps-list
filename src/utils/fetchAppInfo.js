const axios = require('axios')
const isAppManifestValid = require('./isAppManifestValid')

const removeLastTrailingSlash = (url) => {
  if (url.substr(-1) === '/') {
    return url.substr(0, url.length - 1)
  }
  return url
}

const getEmptySafeApp = () => {
  return {
    id: Math.random().toString(),
    url: '',
    name: 'unknown',
    iconUrl: '',
    description: '',
    // fetchStatus: SAFE_APP_FETCH_STATUS.LOADING,
  }
}

module.exports = async ({ url: appUrl, networks }) => {
  let res = {
    ...getEmptySafeApp(),
    // loadingStatus: SAFE_APP_FETCH_STATUS.ERROR,
  }

  if (!appUrl?.length) {
    return res
  }

  res.url = appUrl.trim()
  const noTrailingSlashUrl = removeLastTrailingSlash(res.url)

  try {
    const appInfo = await axios.get(`${noTrailingSlashUrl}/manifest.json`, { timeout: 5_000 })

    // verify imported app fulfil safe requirements
    if (!appInfo?.data || !isAppManifestValid(appInfo.data)) {
      throw Error('The app does not fulfil the structure required.')
    }

    // the DB origin field has a limit of 100 characters
    const originFieldSize = 100
    const jsonDataLength = 20
    const remainingSpace = originFieldSize - res.url.length - jsonDataLength

    const appInfoData = {
      name: appInfo.data.name,
      iconPath: appInfo.data.iconPath,
      description: appInfo.data.description,
      providedBy: appInfo.data.providedBy,
    }

    res = {
      ...res,
      ...appInfoData,
      networks,
      id: JSON.stringify({ url: res.url, name: appInfo.data.name.substring(0, remainingSpace) }),
      // loadingStatus: SAFE_APP_FETCH_STATUS.SUCCESS,
    }

    if (appInfo.data.iconPath) {
      try {
        const iconInfo = await axios.get(`${noTrailingSlashUrl}/${appInfo.data.iconPath}`, { timeout: 1000 * 10 })
        if (/image\/\w/gm.test(iconInfo.headers['content-type'])) {
          res.iconUrl = `${noTrailingSlashUrl}/${appInfo.data.iconPath}`
        }
      } catch (error) {
        console.error(`It was not possible to fetch icon from app ${res.url}`)
      }
    }
    return res
  } catch (error) {
    console.error(`It was not possible to fetch app from ${res.url}: ${error.message}`)
    return res
  }
}