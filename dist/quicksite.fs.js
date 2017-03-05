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
/**
 * reads the markdown files within a directory
 */
exports.readHandlebars = () => __awaiter(this, void 0, void 0, function* () {
    let fileList = yield plugins.smartfile.fs.listFileTree(paths.docsDir, '**/*.md');
    let quicksiteFileArray = [];
    for (let filePathArg of fileList) {
        quicksiteFileArray.push({
            css: null,
            data: null,
            filePath: filePathArg.replace(/.md/, '.html'),
            handlebars: plugins.smartfile.fs.toStringSync(plugins.path.join(paths.docsDir, filePathArg)),
            markdown: null,
            menuItems: null,
            html: null,
            fullHtml: null
        });
    }
    return quicksiteFileArray;
});
/**
 * writes the ready html documents
 */
exports.writeHtml = (quicksiteFilesArg) => __awaiter(this, void 0, void 0, function* () {
    yield plugins.smartfile.fs.ensureDir(paths.publicDir);
    let pageTemplate = yield plugins.smarthbs.getTemplateForFile(plugins.path.join(paths.assetDir, 'page.hbs'));
    for (let quicksiteFile of quicksiteFilesArg) {
        quicksiteFile.fullHtml = pageTemplate(quicksiteFile);
        plugins.smartfile.memory.toFs(quicksiteFile.fullHtml, plugins.path.join(paths.publicDir, quicksiteFile.filePath));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcXVpY2tzaXRlLmZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsMkNBQTBDO0FBSzFDOztHQUVHO0FBQ1EsUUFBQSxjQUFjLEdBQUc7SUFDMUIsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUNoRixJQUFJLGtCQUFrQixHQUFxQixFQUFFLENBQUE7SUFDN0MsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDdEIsR0FBRyxFQUFFLElBQUk7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDN0MsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzVGLFFBQVEsRUFBRSxJQUFJO1lBQ2QsU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQTtBQUMzQixDQUFDLENBQUEsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxTQUFTLEdBQUcsQ0FBTyxpQkFBbUM7SUFDL0QsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JELElBQUksWUFBWSxHQUFHLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FDMUQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FDOUMsQ0FBQTtJQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM1QyxhQUFhLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNwRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ25ILENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQSJ9