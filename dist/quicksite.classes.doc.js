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
class Doc {
    constructor(originalContentArg) {
        this.originalContent = originalContentArg;
        this.evaluateOriginal();
    }
    evaluateOriginal() {
        let parsedOriginal = plugins.smartfm.parse(this.rawContent);
        this.rawContent = parsedOriginal.content;
        this.data = parsedOriginal.data;
    }
    /**
     * renders the rawContent with handlebars
     */
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let template = plugins.handlebars.compile(this.rawContent);
            return template(this.data);
        });
    }
}
exports.Doc = Doc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsYXNzZXMuZG9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcXVpY2tzaXRlLmNsYXNzZXMuZG9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFHOUM7SUFTRSxZQUFhLGtCQUEwQjtRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFBO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQ3pCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQTtJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDRyxNQUFNOztZQUNWLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMxRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QixDQUFDO0tBQUE7Q0FDRjtBQTNCRCxrQkEyQkMifQ==