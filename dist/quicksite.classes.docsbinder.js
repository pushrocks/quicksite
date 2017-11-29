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
const quicksite_classes_doc_1 = require("./quicksite.classes.doc");
const quicksite_classes_docsmenu_1 = require("./quicksite.classes.docsmenu");
class DocsBinder {
    constructor() {
        this.docs = [];
        this.docsMenu = new quicksite_classes_docsmenu_1.DocsMenu(this);
        /**
         * read handlebar induced markdown files from a directory
         */
        this.readHandlebarMarkdownFromDir = (dirArg) => __awaiter(this, void 0, void 0, function* () {
            let fileList = yield plugins.smartfile.fs.listFileTree(dirArg, '**/!(00)*.md');
            for (let filePathArg of fileList) {
                let docFilePath = plugins.path.join(dirArg, filePathArg);
                this.docs.push(quicksite_classes_doc_1.Doc.fromFilePath(docFilePath));
            }
            for (let doc of this.docs) {
                yield doc.update();
            }
            yield this.update();
        });
        // nothing here
    }
    /**
     * updates classes whose state is dependent on the DocsBinder
     */
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.docsMenu.update();
        });
    }
}
exports.DocsBinder = DocsBinder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsYXNzZXMuZG9jc2JpbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5jbGFzc2VzLmRvY3NiaW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUU5QyxtRUFBNkM7QUFDN0MsNkVBQXVEO0FBRXZEO0lBSUU7UUFIQSxTQUFJLEdBQVUsRUFBRSxDQUFBO1FBQ2hCLGFBQVEsR0FBYSxJQUFJLHFDQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFNdkM7O1dBRUc7UUFDSCxpQ0FBNEIsR0FBRyxDQUFPLE1BQWMsRUFBRSxFQUFFO1lBQ3RELElBQUksUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQTtZQUM5RSxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUE7Z0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUFHLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7WUFDL0MsQ0FBQztZQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNwQixDQUFDO1lBQ0QsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDckIsQ0FBQyxDQUFBLENBQUE7UUFoQkMsZUFBZTtJQUNqQixDQUFDO0lBaUJEOztPQUVHO0lBQ0csTUFBTTs7WUFDVixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDOUIsQ0FBQztLQUFBO0NBQ0Y7QUE3QkQsZ0NBNkJDIn0=