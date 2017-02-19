import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

export let readMarkdown = async () => {
  let fileList = await plugins.smartfile.fs.listFileTree(paths.cwd, '**/*.md')
  console.log(fileList)
}


