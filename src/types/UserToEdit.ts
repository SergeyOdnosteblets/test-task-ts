import { UserInfo } from "./UserInfo";

export interface UserToEdit {
    userToEdit?: UserInfo | null
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>
    isModalActive: boolean
    filteredUsers: UserInfo[];
    setUserToEdit?: (list: UserInfo | null) => void 
    forceRefresh: boolean
    setFilteredUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>
    setForceRefresh: React.Dispatch<React.SetStateAction<boolean>>
}