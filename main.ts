import * as rl from 'readline-sync';
import { UserManagement } from './managemnet/user_management';
import { User } from './model.ts/user';

let choice = -1
let userManagement = new UserManagement();
do {
console.log(`=========== Hệ thống quản lý sản phẩm ===========`);
console.log(`1. Đăng nhập `);
console.log(`2. Đăng kí `);
console.log(`3. Thoát `);
choice = +rl.question(`Nhập lựa chọn của bạn  :`);
switch(choice) {
    case 1 : {
        break ;
    }
    case 2: {
        console.log(`=========== Đăng kí tài khoản ===========`)
        let username = '';
        let isValiUsename = true
        do{
            let username = rl.question(`Nhập UserName của bạn : `)
            let currentUser = userManagement.findUserName(username)
            if (currentUser == undefined ) {
                console.error(`Tên tài khoản đã tồn tại !!!`)
             isValiUsename = false;

            } isValiUsename = true;
        } while (!isValiUsename)
        let passworld = rl.question(`Nhập PassWorld của bạn : `)
        let returnpassworld = rl.question(`Xác nhận lại mật khẩu của bạn : `)
        let name = rl.question(`Nhập tên của bạn : `)
        let email = rl.question(`Nhập email của bạn : `) 
        let user = new User (username,passworld,email,name);
        userManagement.creatNew(user);
        
        break ;
    }
    case 3 : {
        break ;
    }
}
} while (choice != 0)