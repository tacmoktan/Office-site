//elements
const header = document.querySelector('#header');
const logoImg = document.querySelector('#logo a img');
let anchors = document.querySelectorAll('#nav-links a');

window.onscroll = () => {

    if (window.pageYOffset > 15) {

        header.style.background = "white";
        header.style.boxShadow = "0px 1px 5px #0000006e";
        logoImg.style.height = 60;

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";
        logoImg.style.height = 100;
    }

    //ONSCROLL active nav-link logic
    if (pageYOffset < 661) {
        anchors.forEach(a => a.setAttribute('class', ''));
        anchors[0].setAttribute('class', 'active');
    }
    else if (pageYOffset >= 661 && pageYOffset < 1330) {
        anchors.forEach(a => a.setAttribute('class', ''));
        anchors[1].setAttribute('class', 'active');
    }
    else if (pageYOffset >= 1330 && pageYOffset < 3015) {
        anchors.forEach(a => a.setAttribute('class', ''));
        anchors[2].setAttribute('class', 'active');
    }
    else if (pageYOffset >= 3015) {
        anchors.forEach(a => a.setAttribute('class', ''));
        anchors[3].setAttribute('class', 'active');
    }
}

//responsive navbar
const hamburger = document.querySelector('#hamburger');
const drawer = document.querySelector('#drawer');

window.onclick = event => {
    if (event.target === hamburger)
        drawer.style.right = 0;
    else
        drawer.style.right = -220;          //drawer's width
}

