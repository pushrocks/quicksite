"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const beautylog = require("beautylog");
exports.beautylog = beautylog;
let bourbon = require('bourbon');
exports.bourbon = bourbon;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnBsdWdpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUucGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qix1Q0FBc0M7QUFvQnBDLDhCQUFTO0FBbkJYLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQW9COUIsMEJBQU87QUFuQlQseUNBQXdDO0FBb0J0QyxnQ0FBVTtBQW5CWiw0Q0FBMkM7QUFDM0MsaUNBQWdDO0FBbUI5Qix3QkFBTTtBQWxCUiw2QkFBNEI7QUFtQjFCLG9CQUFJO0FBbEJOLHFDQUFvQztBQW1CbEMsNEJBQVE7QUFsQlYsdUNBQXNDO0FBbUJwQyw4QkFBUztBQWxCWCxtQ0FBa0M7QUFtQmhDLDBCQUFPO0FBbEJULHFDQUFvQztBQW1CbEMsNEJBQVE7QUFsQlYsdUNBQXNDO0FBbUJwQyw4QkFBUztBQWxCWCx1Q0FBc0M7QUFtQnBDLDhCQUFTO0FBakJYLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDaEIsU0FBUyxFQUFFLFVBQVUsSUFBSTtRQUN2QixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDOUMsQ0FBQztDQUNGLENBQUMsQ0FBQSJ9