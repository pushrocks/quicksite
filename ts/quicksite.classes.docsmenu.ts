import * as plugins from './quicksite.plugins'

import { DocsBinder } from './quicksite.classes.docsbinder'

export interface IMenuItem {
  name: string
  link: string
}

export class DocsMenu {
  menu: IMenuItem[] = []
  docsBinder: DocsBinder
  constructor (docsBinderArg: DocsBinder) {
    this.docsBinder = docsBinderArg
  }

  renderMenuFromDocsBinder () {
    
  }

}