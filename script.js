// navbar toggle










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