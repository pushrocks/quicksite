import * as plugins from './quicksite.plugins'
import * as paths from './quicksite.paths'

// interfaces
import { IQuicksiteFile } from './quicksite.interfaces'

/**
 * reads the markdown files within a directory
 */
export let readHandlebars = async () => {
  let fileList = await plugins.smartfile.fs.listFileTree(paths.docsDir, '**/*.md')
  let quicksiteFileArray: IQuicksiteFile[] = []
  for (let filePathArg of fileList) {
    quicksiteFileArray.push({
      css: null,
      data: null,
      filePath: filePathArg.replace(/.md/, '.html'),
      handlebars: plugins.smartfile.fs.toStringSync(plugins.path.join(paths.docsDir, filePathArg)),
      markdown: null,
      menuItems: null,
      html: null,
      fullHtml: null
    })
  }
  return quicksiteFileArray
}

/**
 * writes the ready html documents
 */
export let writeHtml = async (quicksiteFilesArg: IQuicksiteFile[]) => {
  await plugins.smartfile.fs.ensureDir(paths.publicDir)
  let pageTemplate = await plugins.smarthbs.getTemplateForFile(
    plugins.path.join(paths.assetDir, 'page.hbs')
  )
  for (let quicksiteFile of quicksiteFilesArg) {
    quicksiteFile.fullHtml = pageTemplate(quicksiteFile)
    plugins.smartfile.memory.toFs(quicksiteFile.fullHtml, plugins.path.join(paths.publicDir, quicksiteFile.filePath))
  }
}
