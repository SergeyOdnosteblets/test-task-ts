import { UserInfo } from "./UserInfo";

export interface UserEdit {
    userToEdit?: UserInfo | null
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    isModal: boolean
    list: UserInfo[];
    setList: (list: UserInfo[]) => void 
    setEditUser?: (list: UserInfo | null) => void 
}