"use strict";
exports.__esModule = true;
exports.ProductManagement = void 0;
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
    }
    ProductManagement.prototype.getAll = function () {
        return ProductManagement.products;
    };
    ProductManagement.prototype.creatNew = function (value) {
        ProductManagement.id++;
        value.id = ProductManagement.id++;
        ProductManagement.products.push(value);
    };
    ProductManagement.prototype.updateById = function (id, value) {
        throw new Error("Method not implemented.");
    };
    ProductManagement.prototype.removeById = function (id) {
        throw new Error("Method not implemented.");
    };
    ProductManagement.prototype.findById = function (id) {
        throw new Error("Method not implemented.");
    };
    ProductManagement.id = 1;
    ProductManagement.products = [];
    return ProductManagement;
}());
exports.ProductManagement = ProductManagement;
