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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5mb290ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QywyQ0FBMEM7QUFJL0IsUUFBQSxXQUFXLEdBQUcsQ0FBTyxzQkFBd0MsRUFBNkIsRUFBRTtJQUNyRyxtQkFBbUI7SUFDbkIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQTtJQUNoRSxJQUFJLG1CQUE2QixDQUFBO0lBRWpDLHNCQUFzQjtJQUN0QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7YUFDaEUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixtQkFBbUIsR0FBRyxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUNELElBQUksV0FBVyxHQUFrQixFQUFFLENBQUE7SUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxjQUFjLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQy9DLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDckMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNCQUFzQjtJQUN0QixHQUFHLENBQUMsQ0FBQyxJQUFJLGFBQWEsSUFBSSxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDakQsYUFBYSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7SUFDekMsQ0FBQztJQUNELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQTtBQUMvQixDQUFDLENBQUEsQ0FBQSJ9