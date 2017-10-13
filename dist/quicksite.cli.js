"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./quicksite.plugins");
// import modules
const quicksiteFs = require("./quicksite.fs");
const quicksiteFooter = require("./quicksite.footer");
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
            .then(quicksiteFooter.buildFooter)
            .then(quicksiteHandlebars.handlebarsToMarkdown)
            .then(quicksiteMarkdown.markdownToHtml)
            .then(quicksiteFs.writeHtml)
            .catch(err => {
            console.log(err);
        });
    });
    quicksiteCli.startParse();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBOEM7QUFFOUMsaUJBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QyxzREFBcUQ7QUFDckQsZ0RBQStDO0FBQy9DLDhEQUE2RDtBQUM3RCxrREFBaUQ7QUFDakQsMERBQXlEO0FBRXpELElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtBQUV2QyxRQUFBLEdBQUcsR0FBRyxHQUFHLEVBQUU7SUFDcEIsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QyxXQUFXLENBQUMsY0FBYyxFQUFFO2FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO2FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO2FBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO2FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQzthQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO2FBQzNCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtBQUMzQixDQUFDLENBQUEifQ==