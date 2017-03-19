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
const quicksite_providers_1 = require("./quicksite.providers");
exports.handlebarsToMarkdown = (quicksiteFilesArg) => __awaiter(this, void 0, void 0, function* () {
    let providerObject = yield quicksite_providers_1.getProviderObject();
    for (let quickSiteFile of quicksiteFilesArg) {
        let template = plugins.handlebars.compile(quickSiteFile.handlebars);
        quickSiteFile.markdown = template(providerObject);
    }
    return quicksiteFilesArg;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmhhbmRsZWJhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUuaGFuZGxlYmFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRTlDLCtEQUF5RDtBQUk5QyxRQUFBLG9CQUFvQixHQUFHLENBQU8saUJBQW1DO0lBQzFFLElBQUksY0FBYyxHQUFHLE1BQU0sdUNBQWlCLEVBQUUsQ0FBQTtJQUM5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLGFBQWEsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ25FLGFBQWEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFDRCxNQUFNLENBQUMsaUJBQWlCLENBQUE7QUFDMUIsQ0FBQyxDQUFBLENBQUEifQ==