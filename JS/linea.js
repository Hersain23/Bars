const $c = document.querySelectorAll(".circle");

$c.forEach(el => {
    el.addEventListener("click",e=>{
        alert("Hola");
    })
});


    $c[0].style.background="rgb(0, 109, 199)";
