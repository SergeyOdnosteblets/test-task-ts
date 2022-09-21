import { UserInfo } from "./UserInfo";

export interface UserListItemProps {
    removeUser: (userObj: UserInfo) => void 
    handleEdit: (userObj: UserInfo) => void
    setFilteredUsers: (value: UserInfo[]) => void
    filteredUsers: UserInfo[] | any
    forceRefresh: boolean
}

