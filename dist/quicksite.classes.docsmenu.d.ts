import { DocsBinder } from './quicksite.classes.docsbinder';
export interface IMenuItem {
    name: string;
    link: string;
}
export declare class DocsMenu {
    menu: IMenuItem[];
    docsBinder: DocsBinder;
    constructor(docsBinderArg: DocsBinder);
    renderMenuFromDocsBinder(): void;
}
