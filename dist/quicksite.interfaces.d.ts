export interface IQuicksiteFile {
    css: string;
    data: any;
    filePath: string;
    footerItems: IFooterItem[];
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
export interface IFooterItem {
    html: string;
}
