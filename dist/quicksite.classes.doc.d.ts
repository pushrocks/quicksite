/// <reference types="node" />
import * as plugins from './quicksite.plugins';
import { IMenuItem } from './quicksite.classes.docsmenu';
export interface IMetaInformation {
    title: string;
    description: string;
    wordcount: number;
    rank: number;
}
export declare class Doc {
    filePath: string;
    parsedPath: plugins.path.ParsedPath;
    menuItem: IMenuItem;
    providers: any;
    private originalString;
    private renderData;
    renderedString: string;
    rawContent: string;
    rawFrontmatter: any;
    metaInformation: IMetaInformation;
    /**
     * creates a new doc from a string
     * @param originalStringArg
     */
    constructor(originalStringArg: string, renderDataArg: any);
    static fromFilePath(filePathArg: any): Doc;
    /**
     * updates & renders the rawContent with handlebars
     */
    update(): Promise<void>;
    /**
     * evaluates the doc (the string the doc is created from)
     * and then parses things like frontmatter, metainformation etc.
     */
    private evaluateDoc();
    private getMetadataTitle();
    private getMetadataDescription();
    private getMetadataWordcount();
    /**
     * get the metadata rank (important for ranking the Doc in the menu)
     */
    private getMetadataRank();
}
