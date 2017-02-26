"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
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
marked.setOptions({
    highlight: function (code) {
        return highlightjs.highlightAuto(code).value;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLnBsdWdpbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUucGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qix5Q0FBd0M7QUFpQnRDLGdDQUFVO0FBaEJaLDRDQUEyQztBQUMzQyxpQ0FBZ0M7QUFnQjlCLHdCQUFNO0FBZFIsNkJBQTRCO0FBZTFCLG9CQUFJO0FBZE4scUNBQW9DO0FBZWxDLDRCQUFRO0FBZFYsdUNBQXNDO0FBZXBDLDhCQUFTO0FBZFgscUNBQW9DO0FBZWxDLDRCQUFRO0FBZFYsdUNBQXNDO0FBZXBDLDhCQUFTO0FBYlgsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNoQixTQUFTLEVBQUUsVUFBVSxJQUFJO1FBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUM5QyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIn0=