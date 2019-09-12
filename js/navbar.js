const headerHeight = 120;

//elements
const header = document.querySelector('#header');
const logoImg = document.querySelector('#logo a img');
console.log(logoImg);
window.onscroll = () => {

    if (window.pageYOffset > 15) {

        header.style.background = "white";
        header.style.boxShadow = "0px 1px 5px black";
        header.style.transition = "box-shadow 0.15s ease-in";
        logoImg.style.height= 60;
        
    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";
        logoImg.style.height=100;
    }
}