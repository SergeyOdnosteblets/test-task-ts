import { UserInfo } from "./UserInfo";

export interface ListTypes {
    list: UserInfo[]
    sortCategory: string | number
    setSortCategory: React.Dispatch<React.SetStateAction<string | number>>
    filteredUsers: UserInfo[];
    setFilteredUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>
    setForceRefresh: React.Dispatch<React.SetStateAction<boolean>>
    forceRefresh :boolean
}