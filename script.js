// navbar toggle
const navToggler=document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
   hideSection();
   toggleNavbar();
   document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// active section
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
toggleNavbar();
}
else{
    hideSection();
    document.body.classList.add("hide-scrolling");
}
setTimeout(() => {
    document.querySelector("section.active").classList.remove("active","fade-out");
    document.querySelector(e.target.hash).classList.add("active");
    window.scrollTo(0,0);
    document.body.classList.remove("hide-scrolling");
}, 500);

}
});

// about tabs
const tabContainer=document.querySelector(".about-tabs");
aboutSection=document.querySelector(".about-section");

tabContainer.addEventListener("click",(e)=>{
if(e.target.classList.contains("tab-items") && !e.target.classList.contains("active")){
 tabContainer.querySelector(".active").classList.remove("active");
 e.target.classList.add("active");
 const target=e.target.getAttribute("data-target");
 aboutSection.querySelector(".tab-content.active").classList.remove("active");
 aboutSection.querySelector(target).classList.add("active");
}
})
// contact 
var button = document.getElementById("myButton");

button.addEventListener("click", showAlert);


function showAlert() {
  alert("Something went wrong! please contact through phone or Email");
}