export interface IQuicksiteFile {
    css: string;
    filePath: string;
    handlebars: string;
    markdown: string;
    menuItems: IMenuItem[];
    html: string;
    fullHtml: string;
}
export interface IMenuItem {
    name: string;
    link: string;
}
