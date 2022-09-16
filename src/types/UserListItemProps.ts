import { UserInfo } from "./UserInfo";

export interface UserListItemProps {
    removeUser: (userObj: UserInfo) => void 
    handleEdit: (userObj: UserInfo) => void
    firlteredUsers: UserInfo[]
}

