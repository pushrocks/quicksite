import { Doc } from './quicksite.classes.doc';
export declare class DocsBinder {
    docs: Doc[];
    constructor();
    readHandlebarsFromDir: (dirArg: string) => Promise<void>;
}
