import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./firebase-auth.js";

    let signInButton = document.getElementById("lbtn");

    signInButton.addEventListener("click", () => {
        let email = document.getElementById("lEmail").value;
        let password = document.getElementById("lPassword").value;

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            alert("login successful");
            window.location ="../html/home.html"

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    });
