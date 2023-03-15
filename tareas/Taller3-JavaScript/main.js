let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let Rol = document.querySelector("[name='Rol']")

let campus = {};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: []};
    listaSedes();
    myFormularioCampus.reset();
})

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sede;
    let rol = data.Rol;
    delete data.sede;
    if(rol == "camper"){
        campus[`${sede}`]["Camper"].unshift(data);
    }if (rol == "trainer"){
        campus[`${sede}`]["Trainers"].unshift(data);
    }
    console.log(campus);
    myFormularioCampers.reset();
})