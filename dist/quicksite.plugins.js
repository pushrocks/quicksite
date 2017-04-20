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
const smartenv = require("smartenv");
exports.smartenv = smartenv;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnBsdWdpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUucGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qix1Q0FBc0M7QUF3QnBDLDhCQUFTO0FBdkJYLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQXdCOUIsMEJBQU87QUF2QlQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBd0J2QyxrQ0FBVztBQXZCYix5Q0FBd0M7QUF3QnRDLGdDQUFVO0FBdkJaLDRDQUEyQztBQUMzQyxpQ0FBZ0M7QUF1QjlCLHdCQUFNO0FBdEJSLHFDQUFvQztBQXVCbEMsNEJBQVE7QUF0QlYsNkJBQTRCO0FBdUIxQixvQkFBSTtBQXRCTixxQ0FBb0M7QUF1QmxDLDRCQUFRO0FBdEJWLHFDQUFvQztBQXVCbEMsNEJBQVE7QUF0QlYsdUNBQXNDO0FBdUJwQyw4QkFBUztBQXRCWCxtQ0FBa0M7QUF1QmhDLDBCQUFPO0FBdEJULHFDQUFvQztBQXVCbEMsNEJBQVE7QUF0QlYsdUNBQXNDO0FBdUJwQyw4QkFBUztBQXRCWCw2Q0FBNEM7QUF1QjFDLG9DQUFZO0FBdEJkLHVDQUFzQztBQXVCcEMsOEJBQVM7QUFyQlgsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNoQixTQUFTLEVBQUUsVUFBVSxJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUM5QyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIn0=