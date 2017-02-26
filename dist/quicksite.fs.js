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
    let fileList = yield plugins.smartfile.fs.listFileTree(paths.cwd, '**/*.md');
    let quicksiteFileArray = [];
    for (let filePathArg of fileList) {
        quicksiteFileArray.push({
            css: null,
            filePath: filePathArg.replace(/.md/, '.html'),
            handlebars: plugins.smartfile.fs.toStringSync(plugins.path.resolve(filePathArg)),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcXVpY2tzaXRlLmZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsMkNBQTBDO0FBSzFDOztHQUVHO0FBQ1EsUUFBQSxjQUFjLEdBQUc7SUFDMUIsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUM1RSxJQUFJLGtCQUFrQixHQUFxQixFQUFFLENBQUE7SUFDN0MsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDdEIsR0FBRyxFQUFFLElBQUk7WUFDVCxRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEYsUUFBUSxFQUFFLElBQUk7WUFDZCxTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxDQUFDLGtCQUFrQixDQUFBO0FBQzNCLENBQUMsQ0FBQSxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLFNBQVMsR0FBRyxDQUFPLGlCQUFtQztJQUMvRCxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckQsSUFBSSxZQUFZLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUMxRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUM5QyxDQUFBO0lBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxhQUFhLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDbkgsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFBIn0=