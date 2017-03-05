"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautylog = require("beautylog");
exports.beautylog = beautylog;
const handlebars = require("handlebars");
exports.handlebars = handlebars;
const highlightjs = require("highlight.js");
const marked = require("marked");
exports.marked = marked;
const path = require("path");
exports.path = path;
const smartcli = require("smartcli");
exports.smartcli = smartcli;
const smartfile = require("smartfile");
exports.smartfile = smartfile;
const smarthbs = require("smarthbs");
exports.smarthbs = smarthbs;
const smartpath = require("smartpath");
exports.smartpath = smartpath;
const smartsass = require("smartsass");
exports.smartsass = smartsass;
marked.setOptions({
    highlight: function (code) {
        return highlightjs.highlightAuto(code).value;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnBsdWdpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUucGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qix1Q0FBc0M7QUFtQnBDLDhCQUFTO0FBbEJYLHlDQUF3QztBQW1CdEMsZ0NBQVU7QUFsQlosNENBQTJDO0FBQzNDLGlDQUFnQztBQWtCOUIsd0JBQU07QUFqQlIsNkJBQTRCO0FBa0IxQixvQkFBSTtBQWpCTixxQ0FBb0M7QUFrQmxDLDRCQUFRO0FBakJWLHVDQUFzQztBQWtCcEMsOEJBQVM7QUFoQlgscUNBQW9DO0FBaUJsQyw0QkFBUTtBQWhCVix1Q0FBc0M7QUFpQnBDLDhCQUFTO0FBaEJYLHVDQUFzQztBQWlCcEMsOEJBQVM7QUFmWCxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ2hCLFNBQVMsRUFBRSxVQUFVLElBQUk7UUFDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQzlDLENBQUM7Q0FDRixDQUFDLENBQUEifQ==