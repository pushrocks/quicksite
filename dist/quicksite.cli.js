"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./quicksite.plugins");
// import modules
const quicksiteFs = require("./quicksite.fs");
const quicksiteCss = require("./quicksite.css");
const quicksiteHandlebars = require("./quicksite.handlebars");
const quicksiteMenu = require("./quicksite.menu");
const quicksiteMarkdown = require("./quicksite.markdown");
let quicksiteCli = new plugins.smartcli.Smartcli();
exports.run = () => {
    quicksiteCli.standardTask().then(argv => {
        quicksiteFs.readHandlebars()
            .then(quicksiteCss.addCss)
            .then(quicksiteMenu.buildMenu)
            .then(quicksiteHandlebars.handlebarsToMarkdown)
            .then(quicksiteMarkdown.markdownToHtml)
            .then(quicksiteFs.writeHtml)
            .catch(err => {
            console.log(err);
        });
    });
    quicksiteCli.startParse();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBOEM7QUFFOUMsaUJBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QyxnREFBK0M7QUFDL0MsOERBQTZEO0FBQzdELGtEQUFpRDtBQUNqRCwwREFBeUQ7QUFFekQsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBRXZDLFFBQUEsR0FBRyxHQUFHO0lBQ2YsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ25DLFdBQVcsQ0FBQyxjQUFjLEVBQUU7YUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7YUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7YUFDN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDO2FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7YUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7YUFDM0IsS0FBSyxDQUFDLEdBQUc7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixZQUFZLENBQUMsVUFBVSxFQUFFLENBQUE7QUFDM0IsQ0FBQyxDQUFBIn0=