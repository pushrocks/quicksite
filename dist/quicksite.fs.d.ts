import { IQuicksiteFile } from './quicksite.interfaces';
/**
 * reads the markdown files within a directory
 */
export declare let readHandlebars: () => Promise<IQuicksiteFile[]>;
/**
 * writes the ready html documents
 */
export declare let writeHtml: (quicksiteFilesArg: IQuicksiteFile[]) => Promise<void>;
