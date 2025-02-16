
import { FieldValue, Timestamp } from "firebase/firestore";

export interface User {
    id: string;
    name: string;
    email: string;
    imageUrl:string;
    createdAt: Timestamp| FieldValue;
    updateAt:Timestamp| FieldValue;
}
export interface Interview {
    id: string;
    position: string;
    description: string;
    experience: Number;
    userid: string;
    techstake: string;
    questions: {question: string, answer: string}[];
    createdAt: Timestamp;
    updatedAt: Timestamp;
}