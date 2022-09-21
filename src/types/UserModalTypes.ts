import { UserInfo } from "./UserInfo";

export interface UserModalTypes {
    isModalActive: boolean;
    setIsModalActive: (value: boolean) => void
    list: UserInfo[];
    setList: (list: UserInfo[]) => void ; 
}