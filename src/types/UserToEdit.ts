import { UserInfo } from "./UserInfo";

export interface UserToEdit {
    userToEdit?: UserInfo | null
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
    isModalActive: boolean
    list: UserInfo[];
    setList: (list: UserInfo[]) => void 
    setToEditUser?: (list: UserInfo | null) => void 
}