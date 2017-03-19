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
        providerObject[provider] = yield require(quicksiteConfig.providers[provider]).makeProvider();
    }
    return providerObject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QywyQ0FBMEM7QUFHMUMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUVoRSxJQUFJLGNBQWMsR0FBUSxFQUFFLENBQUE7QUFFakIsUUFBQSxpQkFBaUIsR0FBRztJQUM3QixJQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQU0sV0FBVyxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3BFLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQy9DLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDOUYsQ0FBQztJQUNELE1BQU0sQ0FBQyxjQUFjLENBQUE7QUFDdkIsQ0FBQyxDQUFBLENBQUEifQ==