import { DocsMenu } from './quicksite.classes.docsmenu';
export declare class Doc {
    data: any;
    filePath: string;
    providers: any;
    originalContent: string;
    rawContent: string;
    markdown: string;
    menu: DocsMenu;
    constructor(originalContentArg: string);
    evaluateOriginal(): void;
    /**
     * renders the rawContent with handlebars
     */
    render(): Promise<string>;
}
