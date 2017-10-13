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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcXVpY2tzaXRlLmZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsMkNBQTBDO0FBQzFDLCtEQUF5RDtBQUt6RDs7R0FFRztBQUNRLFFBQUEsY0FBYyxHQUFHLEdBQVMsRUFBRTtJQUNyQyxJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBQ3JGLElBQUksa0JBQWtCLEdBQXFCLEVBQUUsQ0FBQTtJQUM3QyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDakcsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDbEQsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQ3RCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLFNBQVMsRUFBRSxNQUFNLHVDQUFpQixFQUFFO1lBQ3BDLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7WUFDN0MsV0FBVyxFQUFFLElBQUk7WUFDakIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxPQUFPO1lBQzlCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsU0FBUyxFQUFFLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQTtBQUMzQixDQUFDLENBQUEsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxTQUFTLEdBQUcsQ0FBTyxpQkFBbUMsRUFBRSxFQUFFO0lBQ25FLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNyRCxJQUFJLFlBQVksR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQzFELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQzlDLENBQUE7SUFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLGFBQWEsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDNUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDcEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNuSCxDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUEifQ==