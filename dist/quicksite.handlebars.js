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
exports.handlebarsToMarkdown = (quicksiteFilesArg) => __awaiter(this, void 0, void 0, function* () {
    for (let quickSiteFile of quicksiteFilesArg) {
        let template = plugins.handlebars.compile(quickSiteFile.handlebars);
        quickSiteFile.markdown = template({});
    }
    return quicksiteFilesArg;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmhhbmRsZWJhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUuaGFuZGxlYmFycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBS25DLFFBQUEsb0JBQW9CLEdBQUcsQ0FBTyxpQkFBbUM7SUFDMUUsR0FBRyxDQUFDLENBQUMsSUFBSSxhQUFhLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNuRSxhQUFhLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLGlCQUFpQixDQUFBO0FBQzFCLENBQUMsQ0FBQSxDQUFBIn0=