"use strict";
const plugins = require("./quicksite.plugins");
const quicksiteFs = require("./quicksite.fs");
let quicksiteCli = new plugins.smartcli.Smartcli();
exports.run = () => {
    quicksiteCli.standardTask().then(argv => {
        quicksiteFs.readMarkdown();
    });
    quicksiteCli.startParse();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLmNsaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3F1aWNrc2l0ZS5jbGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUE4QztBQUM5Qyw4Q0FBNkM7QUFFN0MsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBRXZDLFFBQUEsR0FBRyxHQUFHO0lBQ2YsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQ25DLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNGLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtBQUMzQixDQUFDLENBQUEifQ==