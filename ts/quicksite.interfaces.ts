export interface IQuicksiteFile {
  css: string
  filePath: string // the original filePath of the markdown file
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
