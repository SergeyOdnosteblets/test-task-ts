export interface UserListItemProps {
    id: string;
    getRemoveUser: (userObj: {
        id: string;
        firstName: string;
        lastName: string;
        age: number;
        gender: number;
        country: string;
    }) => void
    
}