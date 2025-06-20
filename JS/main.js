// === Navbar Menu Activation ===
let menuOptions = document.querySelectorAll("header nav ul li a");

menuOptions.forEach((element) => {
    element.addEventListener("click", () => updateActive(element));
});

function updateActive(element){
    let active = document.querySelector(".active");
    active.classList.remove("active");
    element.classList.add("active");
}


// show menu after hovering

let menu = document.querySelector("header nav .form i");
let target = document.querySelector("header nav .form form");

// when clicking anything but button
document.addEventListener("click", (element)=>{
    if (!menu.contains(element.target) && !target.contains(element.target))
        menu.classList.remove("hover");
})
//when click menu
menu.addEventListener("click", ()=>{
    menu.classList.toggle("hover"); 
})


// === Scroll Go Up Button ===

let button = document.getElementById("up");

window.addEventListener("scroll", () => {
    scrollTimeout = setTimeout(() => {
        window.scrollY > window.screen.height? button.classList.add("visible") : button.classList.remove("visible");
    }, 1000); 
});

button.addEventListener("click", ()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
})


// === Landing Text Slider ===

let textContainer = Array.from(document.querySelectorAll(".landing .text-overlay .text"));

let prev = document.querySelector(".landing .overlay i:first-of-type");
let next = document.querySelector(".landing .overlay i:last-of-type");

let bullets = Array.from(document.querySelectorAll(".landing .overlay li"));

// active
let current = 1;

prev.addEventListener("click", ()=>{
    if(current == 0 ){
        current = textContainer.length - 1
    }
    else{
        current--;
    }
    changeText();
})

next.addEventListener("click", ()=>{
    if (current == textContainer.length - 1) {
        current = 0;
    } else {
        current++;
    }
    changeText(current, textContainer, bullets);
})

bullets.forEach((li, index) => {
    li.addEventListener("click", () => {
        current = index;
        changeText(current, textContainer, bullets);
    });
});

function changeText(curr, e, bullets){
    updateSlider(curr, e, bullets, ".landing .text-overlay .text", '.landing .overlay li');
}

// === Skills Slider ===

let boxCol = Array.from(document.querySelectorAll(".testimon-skills .testimonials .box-col"));

let skillsBullets = Array.from(document.querySelectorAll(".testimonials ul li"));

// active
let currSkill = 1;

skillsBullets.forEach((li, index) => {
    li.addEventListener("click", () => {
    currSkill = index;
    changeCol(currSkill, boxCol, skillsBullets);
    });
});

function updateSlider(currentIndex, elements, bullets, elementSelector, bulletSelector) {
    document.querySelector(`${elementSelector}.active`)?.classList.remove("active");
    elements[currentIndex].classList.add("active");
    
    document.querySelector(`${bulletSelector}.active`)?.classList.remove("active");
    bullets[currentIndex].classList.add("active");
}


function changeCol(currentIndex, elements, bullets){
    updateSlider(
        currentIndex,
        elements,
        bullets,
        ".testimon-skills .testimonials .box-col",
        ".testimonials ul li"
    );
}

// === Portfolio Filter ===

let boxes = Array.from(document.querySelectorAll(".gallery .box"));


Array.from(document.querySelectorAll(".shuffle li")).forEach((e) => {
    e.addEventListener("click", ()=>{
        document.querySelector(".shuffle li.active").classList.remove("active");
        e.classList.add("active");
        shuffleBoxes(e.id);
    })
});

function shuffleBoxes(id){
    boxes.forEach((e)=>{
        if(id == "all"|| e.classList.contains(id)){
            e.style.display = "block";
        }
        else {
            e.style.display = "none";
        }
    });
}