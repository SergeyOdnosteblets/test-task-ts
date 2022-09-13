import { UserInfo } from "./UserInfo";

export interface UserEdit {
    editUser?: UserInfo | null
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
    isModalActive: boolean
    list: UserInfo[];
    setList: (list: UserInfo[]) => void 
    setEditUser?: (list: UserInfo | null) => void 
}