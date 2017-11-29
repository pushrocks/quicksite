import * as plugins from './quicksite.plugins'

import { Doc } from './quicksite.classes.doc'
import { DocsMenu } from './quicksite.classes.docsmenu'

export class DocsBinder {
  docs: Doc[] = []
  docsMenu: DocsMenu = new DocsMenu(this)

  constructor () {
    // nothing here
  }

  /**
   * read handlebar induced markdown files from a directory
   */
  readHandlebarMarkdownFromDir = async (dirArg: string) => {
    let fileList = await plugins.smartfile.fs.listFileTree(dirArg, '**/!(00)*.md')
    for (let filePathArg of fileList) {
      let docFilePath = plugins.path.join(dirArg, filePathArg)
      this.docs.push(Doc.fromFilePath(docFilePath))
    }
    for (let doc of this.docs) {
      await doc.update()
    }
    await this.update()
  }

  /**
   * updates classes whose state is dependent on the DocsBinder
   */
  async update () {
    await this.docsMenu.update()
  }
}
