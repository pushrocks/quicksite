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
exports.addCss = (quicksiteFilesArg) => __awaiter(this, void 0, void 0, function* () {
    let quickSmartsass = new plugins.smartsass.Smartsass({
        entryFilePath: plugins.path.join(paths.assetDir, 'scss/main.scss'),
        includePaths: plugins.bourbon.includePaths
    });
    let smartsassResult = yield quickSmartsass.render();
    let css = smartsassResult.css.toString();
    for (let quicksiteFile of quicksiteFilesArg) {
        quicksiteFile.css = css;
    }
    return quicksiteFilesArg;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5jc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QywyQ0FBMEM7QUFLL0IsUUFBQSxNQUFNLEdBQUcsQ0FBTyxpQkFBbUM7SUFDNUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUNuRCxhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQztRQUNsRSxZQUFZLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZO0tBQzNDLENBQUMsQ0FBQTtJQUNGLElBQUksZUFBZSxHQUFHLE1BQU0sY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ25ELElBQUksR0FBRyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxhQUFhLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFBO0lBQ3pCLENBQUM7SUFDRCxNQUFNLENBQUMsaUJBQWlCLENBQUE7QUFDMUIsQ0FBQyxDQUFBLENBQUEifQ==