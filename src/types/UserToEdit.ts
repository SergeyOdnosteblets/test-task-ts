import { UserInfo } from "./UserInfo";

export interface UserToEdit {
    userToEdit?: UserInfo | null
    setIsModalActive: (value: boolean) => void
    isModalActive: boolean
    filteredUsers: UserInfo[];
    setUserToEdit?: (list: UserInfo | null) => void 
    forceRefresh: boolean
    setFilteredUsers: (value: UserInfo[]) => void
    setForceRefresh: (value: boolean) => void
}