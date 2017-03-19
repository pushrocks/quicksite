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
const smartrequire = require("smartrequire");
exports.smartrequire = smartrequire;
const smartsass = require("smartsass");
exports.smartsass = smartsass;
marked.setOptions({
    highlight: function (code) {
        return highlightjs.highlightAuto(code).value;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnBsdWdpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUucGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qix1Q0FBc0M7QUF1QnBDLDhCQUFTO0FBdEJYLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQXVCOUIsMEJBQU87QUF0QlQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBdUJ2QyxrQ0FBVztBQXRCYix5Q0FBd0M7QUF1QnRDLGdDQUFVO0FBdEJaLDRDQUEyQztBQUMzQyxpQ0FBZ0M7QUFzQjlCLHdCQUFNO0FBckJSLHFDQUFvQztBQXNCbEMsNEJBQVE7QUFyQlYsNkJBQTRCO0FBc0IxQixvQkFBSTtBQXJCTixxQ0FBb0M7QUFzQmxDLDRCQUFRO0FBckJWLHVDQUFzQztBQXNCcEMsOEJBQVM7QUFyQlgsbUNBQWtDO0FBc0JoQywwQkFBTztBQXJCVCxxQ0FBb0M7QUFzQmxDLDRCQUFRO0FBckJWLHVDQUFzQztBQXNCcEMsOEJBQVM7QUFyQlgsNkNBQTRDO0FBc0IxQyxvQ0FBWTtBQXJCZCx1Q0FBc0M7QUFzQnBDLDhCQUFTO0FBcEJYLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDaEIsU0FBUyxFQUFFLFVBQVUsSUFBSTtRQUN2QixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDOUMsQ0FBQztDQUNGLENBQUMsQ0FBQSJ9