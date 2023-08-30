import { signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./firebase-auth.js";



let logoutBtn = document.getElementById('logout');
   
logoutBtn.addEventListener('click', ()=>{
    signOut(auth)
    .then(() => {
        // console.log("User logged out successfully");
window.location = '../../index.html';
    })
    .catch((error) => {
        console.error("An error occurred during logout:", error);
    });
})
