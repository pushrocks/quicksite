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
    /**
     * creates a new doc from a string
     * @param originalStringArg
     */
    constructor(originalStringArg, renderDataArg) {
        this.providers = {};
        this.renderData = {}; // data that is needed to render the originalContent
        this.rawFrontmatter = {};
        // meta information about the doc
        this.metaInformation = {
            title: null,
            description: null,
            wordcount: null,
            rank: null
        };
        this.originalString = originalStringArg;
        this.renderData = renderDataArg;
    }
    static fromFilePath(filePathArg) {
        let localDoc = new Doc(plugins.smartfile.fs.toStringSync(filePathArg), {});
        localDoc.parsedPath = plugins.path.parse(filePathArg);
        return localDoc;
    }
    /**
     * updates & renders the rawContent with handlebars
     */
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            // render all the things
            let template = plugins.handlebars.compile(this.originalString);
            this.renderedString = template(this.renderData);
            // evaluate the doc with rendered data in place
            yield this.evaluateDoc();
        });
    }
    /**
     * evaluates the doc (the string the doc is created from)
     * and then parses things like frontmatter, metainformation etc.
     */
    evaluateDoc() {
        // separate frontmatter from content
        let parsedOriginal = plugins.smartfm.parse(this.renderedString);
        this.rawContent = parsedOriginal.content;
        this.rawFrontmatter = parsedOriginal.data;
        // get metaInformation from this Doc
        this.metaInformation.title = this.getMetadataTitle();
        this.metaInformation.description = this.getMetadataDescription();
        this.metaInformation.wordcount = this.getMetadataWordcount();
        this.metaInformation.rank = this.getMetadataRank();
    }
    // ===============================
    // helpers for metadata extraction
    // ===============================
    getMetadataTitle() {
        if (this.rawFrontmatter.title) {
            return this.rawFrontmatter.title;
        }
        else {
            let execResult = /#\s?([\S\s]*)\n/.exec(this.rawContent);
            if (execResult) {
                return execResult[1];
            }
            else {
                return 'no title found';
            }
        }
    }
    getMetadataDescription() {
        if (this.rawFrontmatter.description) {
            return this.rawFrontmatter.description;
        }
        else {
            let execResult = /#\s?[\S\s]*?\n(?!#)([\S\s]*)\n/.exec(this.rawContent);
            if (execResult && execResult.length === 2) {
                return execResult[1];
            }
            else {
                return 'no description found';
            }
        }
    }
    getMetadataWordcount() {
        return this.rawContent.split(' ').length;
    }
    /**
     * get the metadata rank (important for ranking the Doc in the menu)
     */
    getMetadataRank() {
        return 0; // TODO:
    }
}
exports.Doc = Doc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsYXNzZXMuZG9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvcXVpY2tzaXRlLmNsYXNzZXMuZG9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFhOUM7SUF5QkU7OztPQUdHO0lBQ0gsWUFBWSxpQkFBeUIsRUFBRSxhQUFhO1FBekJwRCxjQUFTLEdBQVEsRUFBRSxDQUFBO1FBSVgsZUFBVSxHQUFRLEVBQUUsQ0FBQSxDQUFDLG9EQUFvRDtRQU9qRixtQkFBYyxHQUFRLEVBQUUsQ0FBQTtRQUV4QixpQ0FBaUM7UUFDakMsb0JBQWUsR0FBcUI7WUFDbEMsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsSUFBSTtZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQTtRQU9DLElBQUksQ0FBQyxjQUFjLEdBQUcsaUJBQWlCLENBQUE7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUE7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUUsV0FBVztRQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FDcEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUM5QyxFQUFFLENBQ0gsQ0FBQTtRQUNELFFBQVEsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDRyxNQUFNOztZQUNWLHdCQUF3QjtZQUN4QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDOUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVB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