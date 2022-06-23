"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const user_management_1 = require("./managemnet/user_management");
const user_1 = require("./model.ts/user");
let choice = -1;
let userManagement = new user_management_1.UserManagement();
do {
    console.log(`=========== Hệ thống quản lý sản phẩm ===========`);
    console.log(`1. Đăng nhập `);
    console.log(`2. Đăng kí `);
    console.log(`3. Thoát `);
    choice = +rl.question(`Nhập lựa chọn của bạn  :`);
    switch (choice) {
        case 1: {
            break;
        }
        case 2: {
            console.log(`=========== Đăng kí tài khoản ===========`);
            let username = '';
            let isValiUsename = true;
            do {
                let username = rl.question(`Nhập UserName của bạn : `);
                let currentUser = userManagement.findUserName(username);
                if (currentUser == undefined) {
                    console.error(`Tên tài khoản đã tồn tại !!!`);
                    isValiUsename = false;
                }
                isValiUsename = true;
            } while (!isValiUsename);
            let passworld = rl.question(`Nhập PassWorld của bạn : `);
            let returnpassworld = rl.question(`Xác nhận lại mật khẩu của bạn : `);
            let name = rl.question(`Nhập tên của bạn : `);
            let email = rl.question(`Nhập email của bạn : `);
            let user = new user_1.User(username, passworld, email, name);
            userManagement.creatNew(user);
            break;
        }
        case 3: {
            break;
        }
    }
} while (choice != 0);
