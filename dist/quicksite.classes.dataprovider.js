"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./quicksite.plugins");
class DataProviderHandler {
    /**
     * the constructor
     */
    constructor() {
        this.data = {};
    }
    /**
     * add dataJson
     */
    addDataJson(filePathArg) {
        // read the file if available
        if (plugins.smartfile.fs.fileExistsSync(filePathArg)) {
            this.data.dataJson = plugins.smartfile.fs.toObjectSync(filePathArg);
        }
    }
    addModuleProvider(addAsArg, moduleArg) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data[addAsArg] = yield moduleArg.makeProvider();
        });
    }
}
exports.DataProviderHandler = DataProviderHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsYXNzZXMuZGF0YXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcXVpY2tzaXRlLmNsYXNzZXMuZGF0YXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUM7SUFHRTs7T0FFRztJQUNIO1FBTEEsU0FBSSxHQUFRLEVBQUUsQ0FBQTtJQU9kLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVcsQ0FBRSxXQUFtQjtRQUM5Qiw2QkFBNkI7UUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDckUsQ0FBQztJQUNILENBQUM7SUFFSyxpQkFBaUIsQ0FBRSxRQUFnQixFQUFFLFNBQWM7O1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDdEQsQ0FBQztLQUFBO0NBQ0Y7QUF2QkQsa0RBdUJDIn0=