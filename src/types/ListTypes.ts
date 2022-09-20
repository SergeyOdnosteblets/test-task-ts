import { UserInfo } from "./UserInfo";

export interface ListTypes {
    list: UserInfo[]
    setList: (list: UserInfo[]) => void ; 
    sortUsers: string | number
    setSortUsers: React.Dispatch<React.SetStateAction<string | number>>
}