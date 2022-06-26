"use strict";
exports.__esModule = true;
exports.ProductMenu = void 0;
var product_management_1 = require("../managemnet/product/product-management");
var rl = require("readline-sync");
var product_1 = require("../model.ts/product");
var ProductChoice;
(function (ProductChoice) {
    ProductChoice[ProductChoice["SHOW_ALL_PRODUCT"] = 1] = "SHOW_ALL_PRODUCT";
    ProductChoice[ProductChoice["CREAT_PRODYCT"] = 2] = "CREAT_PRODYCT";
    ProductChoice[ProductChoice["EDIT_PRODUCT"] = 3] = "EDIT_PRODUCT";
    ProductChoice[ProductChoice["DELETE_PRODUCT"] = 4] = "DELETE_PRODUCT";
    ProductChoice[ProductChoice["SEACH_PRODUCT"] = 5] = "SEACH_PRODUCT";
    ProductChoice[ProductChoice["CHECKOUT"] = 0] = "CHECKOUT";
})(ProductChoice || (ProductChoice = {}));
var ProductMenu = /** @class */ (function () {
    function ProductMenu() {
        this.productmenagement = new product_management_1.ProductManagement();
    }
    ProductMenu.prototype.run = function () {
        var choice = -1;
        do {
            console.log("=========Qu\u1EA3n l\u00FD danh m\u1EE5c s\u1EA3n ph\u1EA9m=========");
            console.log("1. Hi\u1EC3n th\u1ECB danh s\u00E1ch s\u1EA3n ph\u1EA9m");
            console.log("2. Th\u00EAm danh s\u00E1ch s\u1EA3n ph\u1EA9m");
            console.log("3. S\u1EEDa danh s\u00E1ch s\u1EA3n ph\u1EA9m");
            console.log("4. X\u00F3a danh s\u00E1ch s\u1EA3n ph\u1EA9m");
            console.log("5. T\u00ECm ki\u1EBFm s\u1EA3n ph\u1EA9m");
            console.log("0. Tho\u00E1t");
            choice = +rl.question("Nh\u1EADp l\u1EF1a ch\u1ECDn c\u1EE7a b\u1EA1n : ");
            switch (choice) {
                case ProductChoice.SHOW_ALL_PRODUCT: {
                    this.showAllProduct();
                    break;
                }
                case ProductChoice.CREAT_PRODYCT: {
                    this.editProduct();
                    break;
                }
                case ProductChoice.EDIT_PRODUCT: {
                    break;
                }
                case ProductChoice.DELETE_PRODUCT: {
                    break;
                }
                case ProductChoice.SEACH_PRODUCT: {
                    break;
                }
                case ProductChoice.CHECKOUT: {
                    break;
                }
            }
        } while (choice != 0);
    };
    ProductMenu.prototype.showAllProduct = function () {
        console.log("==========danh s\u00E1ch s\u1EA3n ph\u1EA9m==========");
        var product = this.productmenagement.getAll();
        for (var i = 0; i < product.length; i++) {
            console.log("".concat(i + 1, ", ").concat(product[i].name, ", ").concat(product[i].price, ", ").concat(product[i].description));
        }
    };
    ProductMenu.prototype.editProduct = function () {
        console.log("==========th\u00EAm m\u1EDBi s\u1EA3n ph\u1EA9m==========");
        var product = this.inputProduct();
        this.productmenagement.creatNew(product);
    };
    ProductMenu.prototype.inputProduct = function () {
        var name = rl.question("nh\u1EADp t\u00EAn s\u1EA3n ph\u1EA9m m\u1EDBi : ");
        var price = +rl.question("nh\u1EADp gi\u00E1 s\u1EA3n ph\u1EA9m m\u1EDBi : ");
        var description = rl.question("nh\u1EADp m\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m m\u1EDBi : ");
        return new product_1.Product(name, price, description);
    };
    return ProductMenu;
}());
exports.ProductMenu = ProductMenu;
