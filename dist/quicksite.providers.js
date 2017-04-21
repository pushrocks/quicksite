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
const paths = require("./quicksite.paths");
let quicksiteNpmextra = new plugins.npmextra.Npmextra(paths.cwd);
let providerObject = {};
exports.getProviderObject = () => __awaiter(this, void 0, void 0, function* () {
    let quicksiteConfig = quicksiteNpmextra.dataFor('quicksite', {});
    for (let provider in quicksiteConfig.providers) {
        providerObject[provider] = yield plugins.smartrequire.requireInDirSync(quicksiteConfig.providers[provider], paths.cwd).makeProvider();
        plugins.beautylog.log(`added provider ${provider}`);
    }
    // add data.json provider
    let dataJsonPath = plugins.path.join(paths.docsDir, 'data.json');
    providerObject.data = {};
    // read the file if available
    if (plugins.smartfile.fs.fileExistsSync(dataJsonPath)) {
        providerObject.data = plugins.smartfile.fs.toObjectSync(dataJsonPath);
    }
    // add some things from environment
    if (process.env.QUICKSITE_ADSENSE) {
        plugins.beautylog.info('found AdSense data');
        let resultArray = process.env.QUICKSITE_ADSENSE.split('|');
        providerObject.data.adSense = {
            client: resultArray[0],
            slot: resultArray[1],
            slot2: (() => {
                if (resultArray.length > 2) {
                    return resultArray[2];
                }
                else {
                    return null;
                }
            })()
        };
    }
    return providerObject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QywyQ0FBMEM7QUFHMUMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUVoRSxJQUFJLGNBQWMsR0FBUSxFQUFFLENBQUE7QUFFakIsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixJQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQU0sV0FBVyxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3BFLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDckksT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELHlCQUF5QjtJQUN6QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2hFLGNBQWMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBRXhCLDZCQUE2QjtJQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELGNBQWMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7SUFFRCxtQ0FBbUM7SUFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUM1QyxJQUFJLFdBQVcsR0FBYSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwRSxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUM1QixNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQztnQkFDTixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3ZCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQTtnQkFDYixDQUFDO1lBQ0gsQ0FBQyxDQUFDLEVBQUU7U0FDTCxDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUE7QUFDdkIsQ0FBQyxDQUFBLENBQUEifQ==