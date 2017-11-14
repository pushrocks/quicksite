import * as plugins from './quicksite.plugins'

import { Doc } from './quicksite.classes.doc'
import { DocsMenu } from './quicksite.classes.docsmenu'

export class DocsBinder {
  docs: Doc[]

  constructor () {
    // nothing here
  }

  readHandlebarMarkdownFromDir = async (dirArg: string) => {
    let fileList = await plugins.smartfile.fs.listFileTree(dirArg, '**/!(00)*.md')
    for (let filePathArg of fileList) {
      let fileString = plugins.smartfile.fs.toStringSync(plugins.path.join(dirArg, filePathArg))
      this.docs.push(new Doc(fileString))
    }
  }
}
