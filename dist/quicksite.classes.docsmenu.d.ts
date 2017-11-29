import { Tree } from 'lik';
import { DocsBinder } from './quicksite.classes.docsbinder';
import { Doc } from './quicksite.classes.doc';
export interface IMenuItem {
    name: string;
    link: string;
}
/**
 * manages the menu and determines how pages are organized
 */
export declare class DocsMenu {
    docsBinder: DocsBinder;
    menuTree: Tree<Doc>;
    constructor(docsBinderArg: DocsBinder);
    update(): Promise<void>;
    private createMenuTree();
    /**
     * get the root for the menu tree
     */
    private getRootDoc();
    private appendMenuItemToDoc(docArg);
}
