import * as firebase from "firebase/app";

export interface Post{
    uid: string;
    title: string;
    description: string;
    createdAt: firebase.firestore.Timestamp;
    displayName: string;
    photoURL: string;
}