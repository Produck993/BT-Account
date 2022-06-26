"use strict";
exports.__esModule = true;
exports.LoginMenu = void 0;
var rl = require("readline-sync");
var user_management_1 = require("../managemnet/user/user_management");
var e_role_1 = require("../model/e-role");
var user_1 = require("../model/user");
var admin_menu_1 = require("./admin-menu");
var LoginMenu = /** @class */ (function () {
    function LoginMenu() {
        this.choice = -1;
        this.userManagement = new user_management_1.UserManagement();
        this.adminMemu = new admin_menu_1.AdminMenu();
    }
    LoginMenu.prototype.inputAcount = function () {
        console.log("=========== \u0110\u0103ng k\u00ED t\u00E0i kho\u1EA3n ===========");
        var username = this.inputUserName(); // done
        //Passworld
        var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])[a-zA-Z0-9!@#$%^&*?]{6,12}$/g;
        var passworld = this.inputPass(regexPass); // done
        this.inputConfirmPassworld(passworld); //return pass
        var name = rl.question("Nh\u1EADp t\u00EAn c\u1EE7a b\u1EA1n : ");
        var email = this.inmputEmail(); // check email
        var user = new user_1.User(username, passworld, email, name);
        return user;
    };
    LoginMenu.prototype.inputUserName = function () {
        var username = '';
        var validUser = true;
        do {
            username = rl.question("Nh\u1EADp t\u00EAn t\u00E0i kho\u1EA3n c\u1EE7a b\u1EA1n :");
            var currentUser = this.userManagement.findUserName(username);
            if (currentUser) {
                console.log("T\u00EAn t\u00E0i kho\u1EA3n \u0111\u00E3 t\u1ED3n t\u1EA1i !!");
                validUser = false;
            }
            else {
                validUser = true;
            }
        } while (!validUser);
        return username;
    };
    LoginMenu.prototype.inputPass = function (regexPass) {
        var passworld = '';
        var isValidPassWorld = true;
        do {
            passworld = rl.question("Nh\u1EADp m\u1EADt kh\u1EA9u :");
            if (!regexPass.test(passworld)) {
                isValidPassWorld = false;
                console.log("Passworld nh\u1EADp v\u00E0o ph\u1EA3i c\u00F3 \u00EDt nh\u1EA5t 1 k\u00FD t\u1EF1 th\u01B0\u1EDDng, 1 hoa, 1 \u0111\u1EB7c bi\u1EC7t, \u0111\u1ED9 d\u00E0i 6-12 k\u00ED t\u1EF1");
            }
            else {
                isValidPassWorld = true;
            }
        } while (!isValidPassWorld);
        return passworld;
    };
    LoginMenu.prototype.inputConfirmPassworld = function (passworld) {
        var returnpassworld = '';
        do {
            returnpassworld = rl.question("X\u00E1c nh\u1EADn l\u1EA1i m\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n : ");
            if (passworld != returnpassworld) {
                console.log("M\u1EADt kh\u1EA9u nh\u1EADp v\u00E0o kh\u00F4ng kh\u1EDBp !!");
            }
        } while (passworld != returnpassworld);
        return passworld;
    };
    LoginMenu.prototype.inmputEmail = function () {
        var email = '';
        var isValidEmail = true;
        do {
            email = rl.question("Nh\u1EADp email c\u1EE7a b\u1EA1n : ");
            var currentUser = this.userManagement.findByEmail(email);
            var regexEmail = /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/g;
            if (!regexEmail.test(email)) {
                isValidEmail = false;
                console.log("\u0110\u1ECBnh d\u1EA1ng email kh\u00F4ng h\u1EE3p l\u1EC7");
            }
            else {
                isValidEmail = true;
                if (currentUser) {
                    isValidEmail = false;
                    console.log("Email \u0111\u00E3 t\u1ED3n t\u1EA1i !!!");
                }
                else {
                    isValidEmail = true;
                }
            }
        } while (!isValidEmail);
        return email;
    };
    LoginMenu.prototype.runMain = function () {
        var choice = -1;
        do {
            console.log("=========== H\u1EC7 th\u1ED1ng qu\u1EA3n l\u00FD s\u1EA3n ph\u1EA9m ===========");
            console.log("1. \u0110\u0103ng nh\u1EADp ");
            console.log("2. \u0110\u0103ng k\u00ED ");
            console.log("3. Tho\u00E1t ");
            choice = +rl.question("Nh\u1EADp l\u1EF1a ch\u1ECDn c\u1EE7a b\u1EA1n  :");
            switch (choice) {
                case 1: {
                    // console.log(`Đăng nhập thành công !!!`)
                    var username = rl.question("Nh\u1EADp t\u00E0i kho\u1EA3n : ");
                    var passworld = rl.question("Nh\u1EADp m\u1EADt kh\u1EA9u : ");
                    var currentUser = this.userManagement.login(username, passworld);
                    if (currentUser) {
                        console.log("=========\u0110\u0102NG NH\u1EACP TH\u00C0NH C\u00D4NG=========");
                        // Check clone admin --> mở Admin
                        // Check clone admin --> mở User
                        this.adminMemu.run();
                        if (currentUser.role == e_role_1.Role.ADMIN) {
                            // Method Admin  console.log(`Quản lý sản phẩm`)
                            console.log("1. Qu\u1EA3n l\u00FD danh m\u1EE5c");
                            console.log("2. Th\u00EAm danh m\u1EE5c");
                            console.log("3. Ch\u1EC9nh s\u1EEDa danh m\u1EE5c");
                            console.log("0. \u0110\u0103ng xu\u1EA5t");
                        }
                        else {
                            // Method User
                        }
                    }
                    else
                        (console.log("T\u00E0i kho\u1EA3n ho\u1EB7c m\u1EADt kh\u1EA9u kh\u00F4ng \u0111\u00FAng !!!!"));
                    break;
                }
                case 2: {
                    var user = this.inputAcount();
                    this.userManagement.creatNew(user);
                    break;
                }
                case 3: {
                    break;
                }
            }
        } while (choice != 0);
    };
    return LoginMenu;
}());
exports.LoginMenu = LoginMenu;
