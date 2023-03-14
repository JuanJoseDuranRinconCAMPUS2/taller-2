/*let myTbody = document.querySelector(".myTbody")
let Nombre = document.querySelector(".Name");
Nombre.innerHTML = null;

let i = 0
let data = [];

do{
    data.unshift(prompt(`Ingrese el datos ${data.length+1}`))
}while(data.length<5)

console.log(data);

data.forEach((val, id) => {
    myTbody.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${id}</td>
            <td>${val}</td>
        </tr>
    `);
});

Object.fromEntries(new FormData(Data));
*/

let btn = document.querySelector(".btn");
btn.addEventListener("focus", (e)=>{
    alert("sexppppp");
})
console.dir(btn)