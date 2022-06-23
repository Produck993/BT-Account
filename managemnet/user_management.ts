
import { Role } from "../model.ts/e-role";
import { User } from "../model.ts/user";
import { IManagement } from "./i-management";
import { Iusermanagement } from "./i-user-anagement";

export class UserManagement implements Iusermanagement {

    private static users : User[] = [];
    private static id : number = 2;
    constructor() {
            let admin = new User('admin','123456','longnguyen23993@gmail.com','Nguyen Duc Long')
            admin.id = UserManagement.id
            admin.role = Role.ADMIN
            UserManagement.users.push(admin)
    }
    findById(id: number): number {
        let index = -1
        for ( let i = 0 ; i < UserManagement.users.length ; i ++) {
                if(UserManagement.users[i].id == id) {
                    index = i
                    break;
                }
        }
        return 0
    }
    findUserName(userName: string): any {
        for ( let item of UserManagement.users ) {
            if (userName == item.userName) {
                return item;
            }
        }
    }
    getAll(): any {
        return UserManagement.users
    }
    creatNew(value: User): void {
        UserManagement.id++;
        value.id = UserManagement.id;
        value.role = Role.USER;
        UserManagement.users.push(value)
        
    }
    updateById(id: number, value: User): void {
        let index = this.findById(id)
        if ( index != -1) {
            UserManagement.users[index] = value
        }

    }
    removeById(id: number): void {
        let index = this.findById(id)
        UserManagement.users.splice(index,1)
    }
    
}