import { Doc } from './quicksite.classes.doc';
export declare class DocsBinder {
    docs: Doc[];
    constructor();
    readHandlebarMarkdownFromDir: (dirArg: string) => Promise<void>;
}
