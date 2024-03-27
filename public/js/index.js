//This is for mouse hover effect 
const mouseFocus = document.querySelector(".focus");
const documentContainer = document.querySelector(".container")

if(  document.addEventListener("mousemove", function(mouseHover)
{
    let x = mouseHover.pageX;
    let y = mouseHover.pageY;

    mouseFocus.style.background = "radial-gradient(circle at "+x+"px "+y+'px ,rgba(94, 234, 212, 0.1), transparent 40%)'; 

}));

else{
    mouseFocus.style.background = "rgba(94, 234, 212, 0.1)";
}

const height = document.querySelector("body");
const focus = document.querySelector(".focus");
focus.style.height = height.offsetHeight + "px";


const projectSectionOne = document.getElementById("project-section-1");
const projectSectionTwo = document.getElementById("project-section-2");
const projectSectionThree = document.getElementById("project-section-3");
const projectSectionFour = document.getElementById("project-section-4");

projectSectionOne.setAttribute("target", "_blank");
projectSectionTwo.setAttribute("target", "_blank");
projectSectionThree.setAttribute("target", "_blank");
projectSectionFour.setAttribute("target", "_blank");

projectSectionOne.addEventListener("click" , function(){
    const url = "https://github.com/SohailShirzad/";
    window.open(url,"_blank","noopener");
    console.log("hey");
});

projectSectionTwo.addEventListener("click", function(){
    const url = "https://stroika.co.uk/index.html";
    window.open(url,"_blank","noopener");
});

projectSectionThree.addEventListener("click", function(){
    const url = "https://afghanassociationlondon.org.uk/";
    window.open(url,"_blank","noopener");
});

projectSectionFour.addEventListener("click", function(){
    const url = "https://sohailshirzad.github.io/Bootstrap-Portfolio/#Projects";
    window.open(url,"_blank","noopener");
});
