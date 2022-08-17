// hembarger menu

        let navlinks = document.getElementById("navlinks");
        function showmenu(){
            navlinks.style.right = "0";
        }
        function hidemenu(){
            navlinks.style.right = "-200px";
        }
// hembarger menu

// color theme start
let icon = document.getElementById('img_icon');

icon.onclick = function () {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        icon.src = "img/moon.png";
    } else {
        icon.src = "img/sun.png";
    }
} 
// color theme end 