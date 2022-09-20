import { UserInfo } from "./UserInfo";

export interface ListTypes {
    list: UserInfo[]
    setList: (list: UserInfo[]) => void ; 
    sortedUsers: string | number
    setSortedUsers: React.Dispatch<React.SetStateAction<string | number>>
}