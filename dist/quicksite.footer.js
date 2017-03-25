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
exports.buildFooter = (quicksiteFilesArrayArg) => __awaiter(this, void 0, void 0, function* () {
    // set up variables
    let footerPath = plugins.path.join(paths.docsDir, '00footer.md');
    let footerMarkdownArray;
    // make sure it exists
    if (plugins.smartfile.fs.fileExistsSync(footerPath)) {
        footerMarkdownArray = plugins.smartfile.fs.toStringSync(footerPath)
            .split('///', 3);
    }
    else {
        footerMarkdownArray = [];
    }
    let footerItems = [];
    for (let footerMarkdown of footerMarkdownArray) {
        footerItems.push({
            html: plugins.marked(footerMarkdown)
        });
    }
    // add it to all files
    for (let quicksiteFile of quicksiteFilesArrayArg) {
        quicksiteFile.footerItems = footerItems;
    }
    return quicksiteFilesArrayArg;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5mb290ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QywyQ0FBMEM7QUFNL0IsUUFBQSxXQUFXLEdBQUcsQ0FBTyxzQkFBd0M7SUFDdEUsbUJBQW1CO0lBQ25CLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUE7SUFDaEUsSUFBSSxtQkFBNkIsQ0FBQTtJQUVqQyxzQkFBc0I7SUFDdEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxtQkFBbUIsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO2FBQ2hFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDcEIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sbUJBQW1CLEdBQUcsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFDRCxJQUFJLFdBQVcsR0FBa0IsRUFBRSxDQUFBO0lBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksY0FBYyxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUMvQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1NBQ3JDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxhQUFhLElBQUksc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ2pELGFBQWEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO0lBQ3pDLENBQUM7SUFDRCxNQUFNLENBQUMsc0JBQXNCLENBQUE7QUFDL0IsQ0FBQyxDQUFBLENBQUEifQ==