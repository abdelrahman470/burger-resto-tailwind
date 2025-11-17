
const menu_icon = document.getElementById("menu_icon");
const menu_nav = document.getElementById("menu_nav");
const close_icon = document.getElementById("close_icon");
const links = document.querySelectorAll("#menu_nav a");
const paragraph = document.getElementById("typewriter");
const tabs = document.querySelectorAll("#tabs_menu button");
const allCatagoreItems = document.querySelectorAll(".category_items");
const foods = document.querySelectorAll(".foods");
const snaks = document.querySelectorAll(".snaks");
const beverages = document.querySelectorAll(".beverages");

// auto text in hero section
const text = "TASTY BURGERS";
const speed = 150;
let index = 0;
function typeWriter() {
    paragraph.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
//---------------------------------------------
//navbar here
menu_icon.addEventListener("click", () => {
    menu_nav.classList.remove("hidden");
});

close_icon.addEventListener("click", () => {
    menu_nav.classList.add("hidden");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        menu_nav.classList.add("hidden");
    });
});
//----------------------------------------------
//tabs menu here
tabs.forEach((tab) => {
    tab.addEventListener("click" , ()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        tab.classList.add("active");

        const tabvalue = tab.getAttribute('data-tabs');
        console.log(tabvalue);

        allCatagoreItems.forEach((allitems) => {
            allitems.style.display = 'none';

            if(tabvalue === 'foods'){
                foods.forEach((food) => {
                food.style.display = 'block';
                });
            }
            else if(tabvalue === 'snaks'){
                snaks.forEach((snak) => {
                snak.style.display = 'block';
                });
            }
            else if(tabvalue === 'beverages'){
                beverages.forEach((beverage) => {
                beverage.style.display = 'block';
                });
            }
            else{
                allitems.style.display = 'block';
            }
        });
    });
});
//----------------------------------------------
// scroll up
const scrollUp = ()=>{
    const scrollbtn = document.getElementById("scrollbtn");

    if(window.scrollY > 250){ 
        scrollbtn.classList.remove("-bottom-1/2");
        scrollbtn.classList.add("bottom-4");
    }
    else{
        scrollbtn.classList.remove("bottom-4");
        scrollbtn.classList.add("-bottom-1/2");
    }
};

window.addEventListener('scroll',scrollUp);
//----------------------------------------------
const scrollHeader = ()=>{
    const header = document.getElementById("header");

    if(window.scrollY > 250){
        header.classList.add("border-b","border-secondaryColor");
    }
    else{
        header.classList.remove("border-b","border-secondaryColor");
    }
};

window.addEventListener('scroll',scrollHeader);

const sr = ScrollReveal({
    origin: "top",
    distance:"60px",
    duration:2000,
    delay:200
});

sr.reveal(".categ__card" , { interval:300});

sr.reveal(".promo__card1" , { origin:"left"});
sr.reveal(".promo__card2" , { origin:"right"});

sr.reveal(".about__img" , { origin:"bottom"});
sr.reveal(".about__content" , { origin:"top"});

sr.reveal(".menu__items" , { origin:"left"});

sr.reveal(".contact0" , { origin:"left"});
sr.reveal(".contact1" , { origin:"right"});

