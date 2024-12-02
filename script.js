let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let section = document.querySelector(".section");
let navLinks = document.querySelector("header nav a");

window.onscroll =() =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetWeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(link =>{
             link.classList.remove('active');
             document.querySelector("header nav a")("active")


        
        
            })
        }
    })
}
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('active');
}

