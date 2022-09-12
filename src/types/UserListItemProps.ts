export interface UserListItemProps {
  list:any
    removeUser: (userObj: {
        id: string;
        firstName: string;
        lastName: string;
        age: number;
        gender: string;
        country: string;
    }) => void 
}



