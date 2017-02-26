import * as plugins from './quicksite.plugins'

export let cwd = process.cwd()
export let publicDir = plugins.path.join(cwd, 'public')

export let packageDir = plugins.path.join(__dirname, '..')
export let assetDir = plugins.path.join(packageDir, 'assets')