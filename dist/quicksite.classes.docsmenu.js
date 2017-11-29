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
const lik_1 = require("lik");
/**
 * manages the menu and determines how pages are organized
 */
class DocsMenu {
    constructor(docsBinderArg) {
        this.docsBinder = docsBinderArg;
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            this.createMenuTree();
        });
    }
    createMenuTree() {
        return __awaiter(this, void 0, void 0, function* () {
            this.menuTree = new lik_1.Tree();
            let rootDoc = this.getRootDoc();
            this.menuTree.initialize(rootDoc);
            for (let doc of this.docsBinder.docs) {
                this.appendMenuItemToDoc(doc);
                this.menuTree.appendChild(rootDoc, doc);
            }
        });
    }
    /**
     * get the root for the menu tree
     */
    getRootDoc() {
        let rootDoc;
        this.appendMenuItemToDoc(rootDoc);
        for (let doc of this.docsBinder.docs) {
            if (!rootDoc
                && doc.metaInformation.rank === 0) {
                rootDoc = doc;
            }
        }
        return rootDoc;
    }
    appendMenuItemToDoc(docArg) {
        let menuItem = {
            name: docArg.metaInformation.title,
            link: `${docArg.parsedPath.name}.html`
        };
        docArg.menuItem = menuItem;
    }
}
exports.DocsMenu = DocsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsYXNzZXMuZG9jc21lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUuY2xhc3Nlcy5kb2NzbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsNkJBQTBCO0FBVTFCOztHQUVHO0FBQ0g7SUFHRSxZQUFhLGFBQXlCO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFBO0lBQ2pDLENBQUM7SUFFSyxNQUFNOztZQUNWLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUN2QixDQUFDO0tBQUE7SUFFYSxjQUFjOztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBSSxFQUFFLENBQUE7WUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDekMsQ0FBQztRQUNILENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0ssVUFBVTtRQUNoQixJQUFJLE9BQVksQ0FBQTtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUNELENBQUMsT0FBTzttQkFDTCxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxDQUNsQyxDQUFDLENBQUMsQ0FBQztnQkFDRCxPQUFPLEdBQUcsR0FBRyxDQUFBO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFJTyxtQkFBbUIsQ0FBRSxNQUFXO1FBQ3RDLElBQUksUUFBUSxHQUFjO1lBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUs7WUFDbEMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU87U0FDdkMsQ0FBQTtRQUNELE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzVCLENBQUM7Q0FFRjtBQWhERCw0QkFnREMifQ==