import {createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut  } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./assets/js/firebase-auth.js";

/// SignUp Function
let signUpBtn = document.getElementById("btn");
signUpBtn.addEventListener('click', ()=>{

    let email = document.getElementById("sEmail").value;
    let password = document.getElementById("sPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`User logged out successfully \n Email : ${user,email}`);
      window.location = "./assets/html/login.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    console.log(errorCode, errorMessage);
    });

})



// const logout = (e)=>{
//   alert(e)
// }



// let logoutButton = document.getElementById("logout");

// logoutButton.addEventListener("click",  () => {
//     alert("hhjhjhj")
//     // console.log(auth)
//     // signOut(auth)
//     //     .then(() => {
//     //         console.log("User logged out successfully");
//     //         window.location ="./index.html"
//     //         // You can perform additional actions after logout if needed
//     //     })
//     //     .catch((error) => {
//     //         console.error("An error occurred during logout:", error);
//     //     });
// })



