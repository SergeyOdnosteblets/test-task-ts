import { UserInfo } from "./UserInfo"

export interface FilterTypes {
    setFilteredUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>
    list: UserInfo[]

} 