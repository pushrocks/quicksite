import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'


let quicksiteNpmextra = new plugins.npmextra.Npmextra(paths.cwd)

let providerObject: any = {}

export let getProviderObject = async () => {
  let providerStrings = quicksiteNpmextra.dataFor<any>('quicksite',{})
  for (let providerString in providerStrings) {
    providerObject[providerString] = require(providerStrings[providerString]).makeProvider()
  }
  return providerObject
}
