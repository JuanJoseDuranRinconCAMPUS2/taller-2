let div1 = document.querySelector(".box-1");
let div2 = document.querySelector(".box-2");
let div3 = document.querySelector("box-3");

let saludo = (e)=>{
    alert("WENAS CTM");
}

div1.addEventListener("click", saludo);
div2.addEventListener("click", function(e){
    alert(e.target.dataset.opcion);
}, {once : true});
div3.addEventListener("click", saludo);
