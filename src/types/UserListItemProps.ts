export interface UserListItemProps {
    id: string;
    removeUser: (userObj: {
        id: string;
        firstName: string;
        lastName: string;
        age: number;
        gender: string;
        country: string;
    }) => void
    
}