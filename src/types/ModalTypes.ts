export interface ModalTypes {
    activeModal: boolean;
    setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
    list: {
        id: string;
        firstName: string;
        lastName: string;
        age: number;
        gender: string;
        country: string;
    }[];
    setList: (list: {
        id: string;
        firstName: string;
        lastName: string;
        age: number;
        gender: string;
        country: string;
    }[]) => void 
}