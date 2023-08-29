import {createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut  } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./assets/js/firebase-auth.js";

/// SignUp Function
let signUpBtn = document.getElementById("btn");
signUpBtn.addEventListener("click", ()=>{

    let email = document.getElementById("sEmail").value;
    let password = document.getElementById("sPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    console.log(errorCode, errorMessage);
    });

})


// const signInButton = document.getElementById("lbtn");

// signInButton.addEventListener("click", () => {
//     let email = document.getElementById("lEmail").value;
//     let password = document.getElementById("lPassword").value;

//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
// });

document.addEventListener("DOMContentLoaded", () => {
    let logoutButton = document.getElementById("logout");

    logoutButton.addEventListener("click", () => {
        alert("hhjhjhj");
        // Add your logout code here
    });
});





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



