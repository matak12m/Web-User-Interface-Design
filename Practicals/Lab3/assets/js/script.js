let expandMenu = document.getElementById("expandMenu");
let menu = document.getElementById("menu");



expandMenu.addEventListener("click", handleMenu);


function handleMenu() {

    console.log("chaning menu");
    if (menu.style.width == "0px") {
        menu.style.width = "300px";
        


    }
    else {
        menu.style.width = "0px";
    }

}




function redirSignUp() {
    window.location.href = "signup.html";
}

function redirHomePage() {
    window.location.href = "index.html";
}

function redirStatistics() {
    window.location.href = "statistics.html";
}

function openWindow(url) {
     var win =  window.open(url, 'newwindow', 'width = 30vw;', 'height = 24vw', 'target: _blank');
     win.focus()
}