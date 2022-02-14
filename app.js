let inputbox=document.querySelector(".input-box"),
textarea=document.querySelector("textarea"),
signalnum=document.querySelector(".signal_num");

textarea.addEventListener("keyup",()=>{
let VaLeght=textarea.value.length;
// mostrar en el signal num el conteo de numero que se escriben
signalnum.innerHTML=VaLeght; 

(VaLeght>0)?inputbox.classList.add("active")
:inputbox.classList.remove("active");

(VaLeght>100)?inputbox.classList.add("error")
:inputbox.classList.remove("error");

});