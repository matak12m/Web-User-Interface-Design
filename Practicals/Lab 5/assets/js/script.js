let expandMenu = document.getElementById("expandMenu");
let buttons = document.getElementsByClassName("menubutton")
let menu = document.getElementById("menu");
let expandTextButton = document.getElementById("expandText")

expandTextButton.addEventListener("click", expandText);



expandMenu.addEventListener("click", handleMenu);



function handleMenu() {

    console.log("changing menu");
    if (menu.style.width == "0px") {
        menu.style.width = "300px";
        buttons.style.visibility = "visible";


    }
    else {
        menu.style.width = "0px";
        buttons.style.visibility = "hidden";
    }

}


let videoEmbed;




function redirSignUp() {

    window.location.href = "signup.html"
}

function redirHome() {

    window.location.href = "index.html"
}

function redirStatistics() {

    window.location.href = "statistics.html"
}

function redirVideo(video) {
    window.location.href = "videoHost.html"
    
}

let expand = true;
let newPara;
let showLess;

function expandText() {

    if (expand == true) {
        newPara = document.createElement('p');
        showLess = document.createElement('p');

        newPara.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        document.querySelector('.item4').appendChild(newPara);
        expandTextButton.innerText = ""
        showLess.innerText = "show less"
        document.querySelector('.item4').appendChild(showLess)
        showLess.addEventListener("click", expandText);
        expandTextButton.removeEventListener("click", expandText)
        expand = false;
    }
    else {
        newPara.parentNode.removeChild(newPara);
        showLess.parentNode.removeChild(showLess);
       

       newPara.innerText = ""
       expandTextButton.innerText = " show more"
       showLess.innerText = ""
       showLess.removeEventListener("click", expandText)
       expandTextButton.addEventListener("click", expandText);

       expand = true;

    }
}




function openWindow(url) {
     var win =  window.open(url, 'newwindow', 'width = 30vw;', 'height = 24vw', 'target: _blank');
     win.focus()
}

