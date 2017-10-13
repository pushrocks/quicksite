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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QywyQ0FBMEM7QUFFMUMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUVoRSxJQUFJLGNBQWMsR0FBUSxFQUFFLENBQUE7QUFFakIsUUFBQSxpQkFBaUIsR0FBRyxHQUFTLEVBQUU7SUFDeEMsSUFBSSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFNLFdBQVcsRUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNwRSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3JJLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCx5QkFBeUI7SUFDekIsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUNoRSxjQUFjLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUV4Qiw2QkFBNkI7SUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxjQUFjLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDNUMsSUFBSSxXQUFXLEdBQWEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEUsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDNUIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFO2dCQUNYLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdkIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixNQUFNLENBQUMsSUFBSSxDQUFBO2dCQUNiLENBQUM7WUFDSCxDQUFDLENBQUMsRUFBRTtTQUNMLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQTtBQUN2QixDQUFDLENBQUEsQ0FBQSJ9