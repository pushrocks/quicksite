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
class DocsBinder {
    constructor() {
        this.readHandlebarMarkdownFromDir = (dirArg) => __awaiter(this, void 0, void 0, function* () {
            let fileList = yield plugins.smartfile.fs.listFileTree(dirArg, '**/!(00)*.md');
            for (let filePathArg of fileList) {
                let fileString = plugins.smartfile.fs.toStringSync(plugins.path.join(dirArg, filePathArg));
                this.docs.push(new quicksite_classes_doc_1.Doc(fileString));
            }
        });
        // nothing here
    }
}
exports.DocsBinder = DocsBinder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsYXNzZXMuZG9jc2JpbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5jbGFzc2VzLmRvY3NiaW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUU5QyxtRUFBNkM7QUFHN0M7SUFHRTtRQUlBLGlDQUE0QixHQUFHLENBQU8sTUFBYyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFBO1lBQzlFLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtnQkFDMUYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSwyQkFBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7WUFDckMsQ0FBQztRQUNILENBQUMsQ0FBQSxDQUFBO1FBVEMsZUFBZTtJQUNqQixDQUFDO0NBU0Y7QUFkRCxnQ0FjQyJ9