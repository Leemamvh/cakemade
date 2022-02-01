let menu = document.querySelector("#mn-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
};

