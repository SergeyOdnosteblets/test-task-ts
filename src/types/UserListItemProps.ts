import { UserInfo } from "./UserInfo";

export interface UserListItemProps {
    removeUser: (userObj: UserInfo) => void 
    handleEdit: (userObj: UserInfo) => void
    sortedUsers: string | number
    setSortedUsers: React.Dispatch<React.SetStateAction<string | number>>
    setFilteredUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>
    filteredUsers: UserInfo[] | any
}

