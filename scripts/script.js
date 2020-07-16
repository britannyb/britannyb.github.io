function toggleDarkMode() {
    var element = document.body, homeDark = document.getElementById("home"), skillsDark = document.getElementById("skills"), projectsDark = document.getElementById("projects"), aboutDark = document.getElementById("about"), line = document.getElementById("darkLine"), darkElements = document.getElementsByClassName("dark"), imgToggle = document.getElementById("modeImg"), lightMode = "images/lightMode.png", darkMode = "images/darkMode.png";
    var darkList = [element, homeDark, skillsDark, projectsDark, aboutDark];
    line.classList.toggle("lightLine");
    document.getElementById("foot").classList.toggle("darkColor");
    var i;
    for (i = 0; i < darkElements.length; i++) {
        darkElements[i].classList.toggle("light");
    }
    for (i = 0; i < darkList.length; i++) {
        darkList[i].classList.toggle("darkMode");
    }
    if (imgToggle.getAttribute('src') !== darkMode) {
        imgToggle.src = darkMode;
    } else if (imgToggle.getAttribute('src') === darkMode) {
        imgToggle.src = lightMode;
    }
}