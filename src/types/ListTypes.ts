import { UserInfo } from "./UserInfo";

export interface ListTypes {
    list: UserInfo[]
    filteredUsers: UserInfo[];
    setFilteredUsers: (value: UserInfo[]) => void
}