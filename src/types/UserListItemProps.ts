import { UserInfo } from "./UserInfo";

export interface UserListItemProps {
    list: any
    removeUser: (userObj: UserInfo) => void 
    handleEdit: (userObj: UserInfo) => void
    isFilter: UserInfo[]
}

