import { UserInfo } from "./UserInfo";

export interface UserListItemProps {
    list: any
    removeUser: (userObj: UserInfo) => void 
    handleClickEdit: (userObj: UserInfo) => void
}

