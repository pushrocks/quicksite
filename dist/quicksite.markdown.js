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
/**
 * This file contains the code to transform markdown into html
 */
const plugins = require("./quicksite.plugins");
exports.markdownToHtml = (quicksiteFiles) => __awaiter(this, void 0, void 0, function* () {
    for (let quicksiteFile of quicksiteFiles) {
        quicksiteFile.html = plugins.marked(quicksiteFile.markdown);
        quicksiteFile.html = quicksiteFile.html.replace(/href\s?=\s?".*"/g, (match, offset, wholeString) => {
            return match.replace(/\.md/, '.html');
        });
    }
    return quicksiteFiles;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLm1hcmtkb3duLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcXVpY2tzaXRlLm1hcmtkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILCtDQUE4QztBQUtuQyxRQUFBLGNBQWMsR0FBRyxDQUFPLGNBQWdDO0lBQ2pFLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMzRCxhQUFhLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUM3QyxrQkFBa0IsRUFDbEIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVc7WUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxjQUFjLENBQUE7QUFDdkIsQ0FBQyxDQUFBLENBQUEifQ==