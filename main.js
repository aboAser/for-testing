let menu = document.querySelector(".header .menu i");
let links = document.querySelectorAll(".header .menu ul li a");

console.log(links)


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