export interface UserInfo {
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    country: string
}

export interface UserListItemProps {
    id: string;
}

export interface UserItem {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: number;
    country: string;
}