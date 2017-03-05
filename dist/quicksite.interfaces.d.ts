export interface IQuicksiteFile {
    css: string;
    data: any;
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
