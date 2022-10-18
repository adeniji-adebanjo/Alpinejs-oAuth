import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-Ehfi_71W60I1ogcIioTVbhQDZ6lKfAs",
  authDomain: "alpinejs-form.firebaseapp.com",
  projectId: "alpinejs-form",
  storageBucket: "alpinejs-form.appspot.com",
  messagingSenderId: "480214010959",
  appId: "1:480214010959:web:1562cb40bf652433eaee3a",
  measurementId: "G-C93VN9R1BV",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
