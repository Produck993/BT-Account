"use strict";
exports.__esModule = true;
exports.AdminMenu = void 0;
var rl = require("readline-sync");
var product_menu_1 = require("./product-menu");
var AdminChoice;
(function (AdminChoice) {
    AdminChoice[AdminChoice["PRODUCT_MANAGEMENT"] = 1] = "PRODUCT_MANAGEMENT";
    AdminChoice[AdminChoice["CATEGORY_MANAGEMENT"] = 2] = "CATEGORY_MANAGEMENT";
})(AdminChoice || (AdminChoice = {}));
var AdminMenu = /** @class */ (function () {
    function AdminMenu() {
        this.productMenu = new product_menu_1.ProductMenu();
    }
    AdminMenu.prototype.run = function () {
        var choice = -1;
        do {
            console.log("============Qu\u1EA3n l\u00FD c\u1EEDa h\u00E0ng============");
            console.log("1. Qu\u1EA3n l\u00FD danh m\u1EE5c s\u1EA3n ph\u1EA9m");
            console.log("2. Th\u00EAm s\u1EA3n ph\u1EA9m");
            console.log("0. \u0110\u0103ng xu\u1EA5t");
            choice = +rl.question("Nh\u1EADp l\u1EF1a ch\u1ECDn c\u1EE7a b\u1EA1n :");
            switch (choice) {
                case AdminChoice.PRODUCT_MANAGEMENT: {
                    this.productMenu.run();
                    break;
                }
                case AdminChoice.CATEGORY_MANAGEMENT: {
                    console.log("2. Qu\u1EA3n l\u00FD danh m\u1EE5c s\u1EA3n ph\u1EA9m");
                }
            }
        } while (choice != 0);
    };
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;
