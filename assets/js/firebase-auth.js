import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyChkRmbtIukgFURc4n-8M7KhODAfO8GVco",
    authDomain: "simple-form-16a56.firebaseapp.com",
    projectId: "simple-form-16a56",
    storageBucket: "simple-form-16a56.appspot.com",
    messagingSenderId: "751915282773",
    appId: "1:751915282773:web:282dc93d9b83cc95bc7fdc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);