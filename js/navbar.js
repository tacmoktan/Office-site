const headerHeight = 120;

//elements
const header = document.querySelector('#header');
let anchors = document.querySelectorAll('#nav-links a');
const logoImage = document.querySelector('#logo')

window.onscroll = () => {

    if (window.pageYOffset > 5) {

        header.style.background = "white";
        anchors.forEach(anchor => {
            anchor.style.color = "black";
        });

    } else {

        header.style.background = "transparent";
        anchors.forEach(anchor => anchor.style.color = "white");

    }
}