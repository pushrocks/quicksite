"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautylog = require("beautylog");
exports.beautylog = beautylog;
let bourbon = require('bourbon');
exports.bourbon = bourbon;
let bourbonNeat = require('bourbon-neat');
exports.bourbonNeat = bourbonNeat;
const handlebars = require("handlebars");
exports.handlebars = handlebars;
const highlightjs = require("highlight.js");
const marked = require("marked");
exports.marked = marked;
const npmextra = require("npmextra");
exports.npmextra = npmextra;
const path = require("path");
exports.path = path;
const smartcli = require("smartcli");
exports.smartcli = smartcli;
const smartfile = require("smartfile");
exports.smartfile = smartfile;
const smartfm = require("smartfm");
exports.smartfm = smartfm;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnBsdWdpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUucGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qix1Q0FBc0M7QUFzQnBDLDhCQUFTO0FBckJYLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQXNCOUIsMEJBQU87QUFyQlQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBc0J2QyxrQ0FBVztBQXJCYix5Q0FBd0M7QUFzQnRDLGdDQUFVO0FBckJaLDRDQUEyQztBQUMzQyxpQ0FBZ0M7QUFxQjlCLHdCQUFNO0FBcEJSLHFDQUFvQztBQXFCbEMsNEJBQVE7QUFwQlYsNkJBQTRCO0FBcUIxQixvQkFBSTtBQXBCTixxQ0FBb0M7QUFxQmxDLDRCQUFRO0FBcEJWLHVDQUFzQztBQXFCcEMsOEJBQVM7QUFwQlgsbUNBQWtDO0FBcUJoQywwQkFBTztBQXBCVCxxQ0FBb0M7QUFxQmxDLDRCQUFRO0FBcEJWLHVDQUFzQztBQXFCcEMsOEJBQVM7QUFwQlgsdUNBQXNDO0FBcUJwQyw4QkFBUztBQW5CWCxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ2hCLFNBQVMsRUFBRSxVQUFVLElBQUk7UUFDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQzlDLENBQUM7Q0FDRixDQUFDLENBQUEifQ==