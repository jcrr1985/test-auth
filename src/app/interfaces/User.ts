import { Permission } from "./permission";

export interface User {
    username: string;
    password: string;
    permission: Permission;
}