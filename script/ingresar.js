import { leerUsuarios } from "./firestore-usuarios.js";

const email=document.querySelector("#email");
const password=document.querySelector("#password");
const buttonLogin=document.querySelector("#button-login");

buttonLogin.addEventListener("click", async(e)=>{
    e.preventDefault();
    try {
        let usersList=[];
        const response=await leerUsuarios();
        usersList=[...response];
        console.log(usersList);
        const isUserRegistered=usersList.find(user=>user.correo==email.value && user.clave==password.value);
        if(!isUserRegistered){
            alert("usuario no registrado");
        }else{
            window.location.href='inicio.html';
            localStorage.setItem('users',"true");
        }
       
    } catch (error) {
        throw new Error(error);
    }
});
