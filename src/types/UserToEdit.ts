import { UserInfo } from "./UserInfo";

export interface UserEdit {
    userToEdit?: UserInfo | null
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
    isModalActive: boolean
    list: UserInfo[];
    setList: (list: UserInfo[]) => void 
    setUserToEdit?: (list: UserInfo | null) => void 
}