"use strict";
exports.__esModule = true;
exports.UserManagement = void 0;
var e_role_1 = require("../../model/e-role");
var user_1 = require("../../model/user");
var UserManagement = /** @class */ (function () {
    function UserManagement() {
        var admin = new user_1.User('admin', '123456', 'longnguyen23993@gmail.com', 'Nguyen Duc Long');
        admin.id = UserManagement.id;
        admin.role = e_role_1.Role.ADMIN;
        UserManagement.users.push(admin);
    }
    UserManagement.prototype.login = function (username, passworld) {
        for (var _i = 0, _a = UserManagement.users; _i < _a.length; _i++) {
            var item = _a[_i];
            if (username == item.userName && passworld == item.passworld) {
                return item;
            }
        }
        return null;
    };
    UserManagement.prototype.findById = function (id) {
        var index = -1;
        for (var i = 0; i < UserManagement.users.length; i++) {
            if (UserManagement.users[i].id == id) {
                index = i;
                break;
            }
        }
        return 0;
    };
    UserManagement.prototype.findUserName = function (userName) {
        for (var _i = 0, _a = UserManagement.users; _i < _a.length; _i++) {
            var item = _a[_i];
            if (userName == item.userName) {
                return item;
            }
        }
        return null;
    };
    UserManagement.prototype.getAll = function () {
        return UserManagement.users;
    };
    UserManagement.prototype.creatNew = function (value) {
        UserManagement.id++;
        value.id = UserManagement.id;
        value.role = e_role_1.Role.USER;
        UserManagement.users.push(value);
    };
    UserManagement.prototype.updateById = function (id, value) {
        var index = this.findById(id);
        if (index != -1) {
            UserManagement.users[index] = value;
        }
    };
    UserManagement.prototype.removeById = function (id) {
        var index = this.findById(id);
        UserManagement.users.splice(index, 1);
    };
    UserManagement.prototype.findByEmail = function (email) {
        for (var _i = 0, _a = UserManagement.users; _i < _a.length; _i++) {
            var item = _a[_i];
            if (email == item.email) {
                return item;
            }
        }
        return null;
    };
    UserManagement.users = [];
    UserManagement.id = 1;
    return UserManagement;
}());
exports.UserManagement = UserManagement;
