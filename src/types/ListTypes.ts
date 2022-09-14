import { UserInfo } from "./UserInfo";

export interface ListTypes {
    list: UserInfo[]
    setList: (list: UserInfo[]) => void ; 
}