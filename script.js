var mainMenu = document.getElementById("mainMenu");
var menuToggle = document.getElementById("menu-toggle");

mainMenu.onclick = function () {
    if (menuToggle.checked == true) {
        menuToggle.checked = false;
    }
    else {
        menuToggle.checked = true;
    }
}
