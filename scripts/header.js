const header = document.getElementById("header");

window.addEventListener("scroll",()=>{
    header.style.background = window.scrollY >50 ? "white" : "transparent"
    header.style.boxShadow = window.scrollY > 50 ? "rgba(33, 35, 38, 40%) 0px 10px 10px -10px" : ""
})

function showMenu(){
    const headerRight = document.getElementById("header-right");
    headerRight.classList.toggle("displayNone")
    console.log("ishladi");
    
}



