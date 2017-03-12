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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnBsdWdpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUucGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qix1Q0FBc0M7QUFxQnBDLDhCQUFTO0FBcEJYLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQXFCOUIsMEJBQU87QUFwQlQsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBcUJ2QyxrQ0FBVztBQXBCYix5Q0FBd0M7QUFxQnRDLGdDQUFVO0FBcEJaLDRDQUEyQztBQUMzQyxpQ0FBZ0M7QUFvQjlCLHdCQUFNO0FBbkJSLDZCQUE0QjtBQW9CMUIsb0JBQUk7QUFuQk4scUNBQW9DO0FBb0JsQyw0QkFBUTtBQW5CVix1Q0FBc0M7QUFvQnBDLDhCQUFTO0FBbkJYLG1DQUFrQztBQW9CaEMsMEJBQU87QUFuQlQscUNBQW9DO0FBb0JsQyw0QkFBUTtBQW5CVix1Q0FBc0M7QUFvQnBDLDhCQUFTO0FBbkJYLHVDQUFzQztBQW9CcEMsOEJBQVM7QUFsQlgsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNoQixTQUFTLEVBQUUsVUFBVSxJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUM5QyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIn0=