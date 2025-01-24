let menu = document.querySelector(".header .menu i");
let links = document.querySelectorAll(".header .menu ul li a");
let images =["img/001.jpg" , "img/002.jpg" , "img/003.jpg" , "img/004.jpg" ,"img/about.jpg"]



menu.onclick =function (){
    // Toggle the "show" class to display or hide the dropdown menu
    document.querySelector(".header .menu ul").classList.toggle("show")
}

// Add event listener to each link to prevent default behavior and add active class
links.forEach((link)=>{
    link.addEventListener("click", function(e){
        e.preventDefault();
        // Remove active class from all other links
        links.forEach((otherLink)=>{
            otherLink.classList.remove("active")
        })
        // Add active class to the clicked link 
        e.currentTarget.classList.add("active")
        
        
    })
})
// =============== cont info =============
let infoBtn = document.querySelector(".cont-btn");
let ourInfo = document.querySelector(".cont .text .info");
let ourHead = document.querySelector(".cont .text .head");

infoBtn.onclick = function (){
    ourInfo.classList.toggle("inOut");
    ourHead.classList.toggle("toggled");
    if (ourInfo.classList.contains("inOut")){
        infoBtn.innerHTML = "Read Less";
    }else {
        infoBtn.innerHTML = "Read More";
    }
}


// ============= about image change ==================

let aboutImg = document.querySelector(".contImg");
let counter = 0;

// aboutImg.src = images[counter];

setInterval(()=>{
    counter++;
    if(counter >= images.length){
        counter = 0;
    }
    aboutImg.style.backgroundImage = `url(${images[counter]})`;
    
},5000)