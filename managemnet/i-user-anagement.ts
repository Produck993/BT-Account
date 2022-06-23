import { User } from "../model.ts/user";
import { IManagement } from "./i-management";

export interface Iusermanagement extends IManagement <User> {
    findUserName (userName : string) : User | null;
}