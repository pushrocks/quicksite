import * as plugins from './quicksite.plugins'

export class DataProviderHandler {
  data: any = {}

  /**
   * the constructor
   */
  constructor() {

  }

  /**
   * add dataJson
   */
  addDataJson (filePathArg: string) {
    // read the file if available
    if (plugins.smartfile.fs.fileExistsSync(filePathArg)) {
      this.data.dataJson = plugins.smartfile.fs.toObjectSync(filePathArg)
    }
  }

  async addModuleProvider (addAsArg: string, moduleArg: any) {
    this.data[addAsArg] = await moduleArg.makeProvider()
  }
}
