let expandMenu = document.getElementById("expandMenu");
let menu = document.getElementById("menu");



expandMenu.addEventListener("click", handleMenu);


function handleMenu() {

    console.log("chaning menu");
    if (menu.style.visibility == "hidden") {
        menu.style.visibility = "visible";


    }
    else {
        menu.style.visibility = "hidden";
    }

}


function redirSignUp() {
    window.location.href = "signup.html";
}

function redirHomePage() {
    window.location.href = "index.html";
}