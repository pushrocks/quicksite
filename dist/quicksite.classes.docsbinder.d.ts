import { Doc } from './quicksite.classes.doc';
import { DocsMenu } from './quicksite.classes.docsmenu';
export declare class DocsBinder {
    docs: Doc[];
    docsMenu: DocsMenu;
    constructor();
    /**
     * read handlebar induced markdown files from a directory
     */
    readHandlebarMarkdownFromDir: (dirArg: string) => Promise<void>;
    /**
     * updates classes whose state is dependent on the DocsBinder
     */
    update(): Promise<void>;
}
