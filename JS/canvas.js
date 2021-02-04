const d = document,
w = window,
options={threshold:.5},
$intersections = d.querySelectorAll(".intersection"),
$up = d.querySelector(".icon-circle-up");
w.addEventListener("scroll",scroleo);
let intersection = new IntersectionObserver(call,options);
let scroll = 0
$up.addEventListener("click",e=>{
    if(e.target == $up){
        window.scroll(0,0);
    }
})
$intersections.forEach(element => {
    intersection.observe(element);
});

function call(entries){
   entries.forEach(element => {
       if(element.isIntersecting){
            d.querySelector("img").style.opacity="1";
            d.querySelector("img").style.boxShadow="2px 2px 5px 2px rgb(50,50,50)";
       }
   });
}
function scroleo(e){
    scroll = w.scrollY;
    if(scroll >= 400){
        $up.style.opacity="1";
    }
    else{
        $up.style.opacity="0"
    }
}
