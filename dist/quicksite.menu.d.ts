import { IQuicksiteFile } from './quicksite.interfaces';
/**
 * traverses over the read quicksiteFile and creates menuData
 */
export declare let buildMenu: (quicksiteFilesArg: IQuicksiteFile[]) => Promise<IQuicksiteFile[]>;
