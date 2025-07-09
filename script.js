const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');
let flag = false;

toggleButton.addEventListener('click', () => {

    if (flag == false) {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        toggleButton.innerHTML = "TURN OFF";
        flag = true;
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        toggleButton.innerHTML = "TURN ON";
        flag = false;
    }

