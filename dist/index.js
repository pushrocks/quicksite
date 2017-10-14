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
const cli = require("./quicksite.cli");
cli.run();
const quicksiteFs = require("./quicksite.fs");
const quicksiteHandlears = require("./quicksite.handlebars");
const quicksiteMenu = require("./quicksite.menu");
const quicksiteFooter = require("./quicksite.footer");
/**
 * gets files without processing them
 */
exports.getFilesArrayWithProviderData = () => __awaiter(this, void 0, void 0, function* () {
    return yield quicksiteFs.readHandlebars()
        .then(quicksiteHandlears.handlebarsToMarkdown)
        .then(quicksiteMenu.buildMenu)
        .then(quicksiteFooter.buildFooter);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQXNDO0FBQ3RDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtBQUVULDhDQUE2QztBQUM3Qyw2REFBNEQ7QUFDNUQsa0RBQWlEO0FBQ2pELHNEQUFxRDtBQVFyRDs7R0FFRztBQUNRLFFBQUEsNkJBQTZCLEdBQUcsR0FBUyxFQUFFO0lBQ3BELE1BQU0sQ0FBQyxNQUFNLFdBQVcsQ0FBQyxjQUFjLEVBQUU7U0FDdEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDO1NBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1NBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDdEMsQ0FBQyxDQUFBLENBQUEifQ==