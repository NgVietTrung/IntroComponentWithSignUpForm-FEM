const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errIcon = document.getElementsByClassName("error__icon");
const errMes = document.getElementsByClassName("error__mes");

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let fn = firstName.value;
    let ln = lastName.value;
    let em = email.value;
    let pw = password.value;
    if(!fn){
        firstName.classList.add("error__input");
        firstName.placeholder = "";
        errIcon[0].style.display = "block";
        errMes[0].style.display = "block";
    }
    else {
        firstName.classList.remove("error__input");
        errIcon[0].style.display = "none";
        errMes[0].style.display = "none";
    }

    if(!ln){
        lastName.classList.add("error__input");
        lastName.placeholder = "";
        errIcon[1].style.display = "block";
        errMes[1].style.display = "block";
    }
    else {
        lastName.classList.remove("error__input");
        errIcon[1].style.display = "none";
        errMes[1].style.display = "none";
    }

    if(!em || validateEmail(em) == false){
        email.classList.add("error__input");
        email.placeholder = "email@example/com";
        errIcon[2].style.display = "block";
        errMes[2].style.display = "block";
    }
    else {
        email.classList.remove("error__input");
        errIcon[2].style.display = "none";
        errMes[2].style.display = "none";
    }

    if(!pw){
        password.classList.add("error__input");
        password.placeholder = "";
        errIcon[3].style.display = "block";
        errMes[3].style.display = "block";
    }
    else {
        password.classList.remove("error__input");
        errIcon[3].style.display = "none";
        errMes[3].style.display = "none";
    }
})
