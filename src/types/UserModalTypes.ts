import { UserInfo } from "./UserInfo";

export interface UserModalTypes {
    isModalActive: boolean;
    setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
    list: UserInfo[];
    setList: (list: UserInfo[]) => void ; 
}