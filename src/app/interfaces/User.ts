import { Permissions } from "./permissions";

export interface User {
    username: string;
    password: string;
    permissions: Permissions;
}