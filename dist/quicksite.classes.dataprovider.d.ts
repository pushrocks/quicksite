export declare class DataProviderHandler {
    data: any;
    /**
     * the constructor
     */
    constructor();
    /**
     * add dataJson
     */
    addDataJson(filePathArg: string): void;
    addModuleProvider(addAsArg: string, moduleArg: any): Promise<void>;
}
