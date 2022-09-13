import { UserInfo } from "./UserInfo";

export interface UserEdit {
    editUser: UserInfo
    setIsEditModalActive: React.Dispatch<React.SetStateAction<boolean>>
    isEditModalActive: boolean
    list: UserInfo[];
    setList: (list: UserInfo[]) => void 
    setEditUser: (list: UserInfo | null) => void 
}