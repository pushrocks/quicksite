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
const quicksite_providers_1 = require("./quicksite.providers");
/**
 * reads the markdown files within a directory
 */
exports.readHandlebars = () => __awaiter(this, void 0, void 0, function* () {
    let fileList = yield plugins.smartfile.fs.listFileTree(paths.docsDir, '**/!(00)*.md');
    let quicksiteFileArray = [];
    for (let filePathArg of fileList) {
        let fileString = plugins.smartfile.fs.toStringSync(plugins.path.join(paths.docsDir, filePathArg));
        let parsedFile = plugins.smartfm.parse(fileString);
        quicksiteFileArray.push({
            css: null,
            data: parsedFile.data,
            providers: yield quicksite_providers_1.getProviderObject(),
            filePath: filePathArg.replace(/.md/, '.html'),
            footerItems: null,
            handlebars: parsedFile.content,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcXVpY2tzaXRlLmZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsMkNBQTBDO0FBQzFDLCtEQUF5RDtBQUt6RDs7R0FFRztBQUNRLFFBQUEsY0FBYyxHQUFHO0lBQzFCLElBQUksUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUE7SUFDckYsSUFBSSxrQkFBa0IsR0FBcUIsRUFBRSxDQUFBO0lBQzdDLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUNqRyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNsRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDdEIsR0FBRyxFQUFFLElBQUk7WUFDVCxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7WUFDckIsU0FBUyxFQUFFLE1BQU0sdUNBQWlCLEVBQUU7WUFDcEMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztZQUM3QyxXQUFXLEVBQUUsSUFBSTtZQUNqQixVQUFVLEVBQUUsVUFBVSxDQUFDLE9BQU87WUFDOUIsUUFBUSxFQUFFLElBQUk7WUFDZCxTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxDQUFDLGtCQUFrQixDQUFBO0FBQzNCLENBQUMsQ0FBQSxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLFNBQVMsR0FBRyxDQUFPLGlCQUFtQztJQUMvRCxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDckQsSUFBSSxZQUFZLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUMxRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUM5QyxDQUFBO0lBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxhQUFhLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDbkgsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFBIn0=