import * as plugins from './quicksite.plugins'
import { Tree } from 'lik'

import { DocsBinder } from './quicksite.classes.docsbinder'
import { Doc } from './quicksite.classes.doc'

export interface IMenuItem {
  name: string
  link: string
}

/**
 * manages the menu and determines how pages are organized
 */
export class DocsMenu {
  docsBinder: DocsBinder
  menuTree: Tree<Doc>
  constructor (docsBinderArg: DocsBinder) {
    this.docsBinder = docsBinderArg
  }

  async update () {
    this.createMenuTree()
  }

  private async createMenuTree () {
    this.menuTree = new Tree()
    let rootDoc = this.getRootDoc()
    this.menuTree.initialize(rootDoc)
    for (let doc of this.docsBinder.docs) {
      this.appendMenuItemToDoc(doc)
      this.menuTree.appendChild(rootDoc, doc)
    }
  }

  /**
   * get the root for the menu tree
   */
  private getRootDoc (): Doc {
    let rootDoc: Doc
    this.appendMenuItemToDoc(rootDoc)
    for (let doc of this.docsBinder.docs) {
      if (
        !rootDoc
        && doc.metaInformation.rank === 0
      ) {
        rootDoc = doc
      }
    }
    return rootDoc
  }



  private appendMenuItemToDoc (docArg: Doc) {
    let menuItem: IMenuItem = {
      name: docArg.metaInformation.title,
      link: `${docArg.parsedPath.name}.html`
    }
    docArg.menuItem = menuItem
  }

}
