import { UserInfo } from "./UserInfo"

export interface FilterTypes {
    setFilterUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>
    list: UserInfo[]

} 