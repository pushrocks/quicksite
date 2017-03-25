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
    if (plugins.smartfile.fs.fileExistsSync(dataJsonPath)) {
        providerObject['data'] = plugins.smartfile.fs.toObjectSync(dataJsonPath);
    }
    return providerObject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QywyQ0FBMEM7QUFHMUMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUVoRSxJQUFJLGNBQWMsR0FBUSxFQUFFLENBQUE7QUFFakIsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixJQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQU0sV0FBVyxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3BFLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDckksT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELHlCQUF5QjtJQUN6QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ2hFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQTtBQUN2QixDQUFDLENBQUEsQ0FBQSJ9