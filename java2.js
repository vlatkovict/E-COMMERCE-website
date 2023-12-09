document.addEventListener("DOMContentLoaded", () => {
    const modeSwitch = document.getElementById("flexSwitchCheckChecked");
const body = document.body;
const forNav = document.getElementById("forNav");
const icon = document.getElementById("icon");



modeSwitch.addEventListener("change", () => {
    if(modeSwitch.checked){
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        forNav.classList.add("dark-mode");
        forNav.classList.remove("light-mode");
        icon.classList.add("dark-mode");
        icon.classList.remove("light-mode");
       
       
    }
    else{
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        forNav.classList.add("light-mode");
        forNav.classList.remove("dark-mode");
        icon.classList.add("light-mode");
        icon.classList.remove("dark-mode");
     
       
    }
});
});