
//This is for mouse hover effect 
let mouseFocus = document.querySelector(".focus");

    document.addEventListener("mousemove", function(mouseHover)
    {
        let x = mouseHover.pageX;
        let y = mouseHover.pageY;

        mouseFocus.style.background = "radial-gradient(circle at "+x+"px "+y+'px ,rgba(94, 234, 212, 0.1), transparent 40%)'; 

    })