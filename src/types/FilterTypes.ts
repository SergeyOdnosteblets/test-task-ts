import { FilterFormTypes } from "./FilterFormTypes"
import { UserInfo } from "./UserInfo"

export interface FilterTypes {
    setFilteredUsers: (value: UserInfo[]) => void
    onSubmit: (data: FilterFormTypes) => void
} 