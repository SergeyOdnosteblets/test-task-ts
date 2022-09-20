import { UserInfo } from "./UserInfo";

export interface UserListItemProps {
    removeUser: (userObj: UserInfo) => void 
    handleEdit: (userObj: UserInfo) => void
    sortUsers: string | number
    setSortUsers: React.Dispatch<React.SetStateAction<string | number>>
    setFilteredUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>
    firlteredUsers: UserInfo[]
}

