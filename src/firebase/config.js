import { initializeApp } from "firebase/app";
import { FIREBASE_CONSTANTS } from "../consts";
import { getStorage } from "firebase/storage";

const app = initializeApp(FIREBASE_CONSTANTS);

export const storage = getStorage(app);
