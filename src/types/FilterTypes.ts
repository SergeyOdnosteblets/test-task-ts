import { FilterFormTypes } from "./FilterFormTypes"
import { UserInfo } from "./UserInfo"

export interface FilterTypes {
    setFilteredUsers: React.Dispatch<React.SetStateAction<UserInfo[]>>
    onSubmit: (data: FilterFormTypes) => void
} 