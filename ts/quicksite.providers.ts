import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

let quicksiteNpmextra = new plugins.npmextra.Npmextra(paths.cwd)

let providerObject: any = {}

export let getProviderObject = async () => {
  let quicksiteConfig = quicksiteNpmextra.dataFor<any>('quicksite',{})
  for (let provider in quicksiteConfig.providers) {
    providerObject[provider] = await plugins.smartrequire.requireInDirSync(quicksiteConfig.providers[provider], paths.cwd).makeProvider()
    plugins.beautylog.log(`added provider ${provider}`)
  }

  // add data.json provider
  let dataJsonPath = plugins.path.join(paths.docsDir, 'data.json')
  providerObject.data = {}

  // read the file if available
  if (plugins.smartfile.fs.fileExistsSync(dataJsonPath)) {
    providerObject.data = plugins.smartfile.fs.toObjectSync(dataJsonPath)
  }

  // add some things from environment
  if (process.env.QUICKSITE_ADSENSE) {
    plugins.beautylog.info('found AdSense data')
    let resultArray: string[] = process.env.QUICKSITE_ADSENSE.split('|')
    providerObject.data.adSense = {
      client: resultArray[0],
      slot: resultArray[1],
      slot2: (() => {
        if (resultArray.length > 2) {
          return resultArray[2]
        } else {
          return null
        }
      })()
    }
  }

  return providerObject
}
