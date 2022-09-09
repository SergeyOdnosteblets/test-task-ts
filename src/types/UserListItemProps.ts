export interface UserListItemProps {
    id: string;
    removeUser: (userObj: {
        id: string;
        firstName: string;
        lastName: string;
        age: number;
        gender: number;
        country: string;
    }) => void
    
}