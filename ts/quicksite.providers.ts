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
  return providerObject
}
