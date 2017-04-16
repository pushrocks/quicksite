export interface IQuicksiteFile {
  css: string
  data: any // any data that is prepended in FrontMatter
  filePath: string // the original filePath of the markdown file
  providers: any
  footerItems: IFooterItem[]
  handlebars: string // the original file content, a mixture of markdown and handlebars
  markdown: string // the mardown string from the file
  menuItems: IMenuItem[] // the menu that is to be attached to every final html page
  html: string
  fullHtml: string // the fill html
}

export interface IMenuItem {
  name: string
  link: string
}

export interface IFooterItem {
  html: string
}
