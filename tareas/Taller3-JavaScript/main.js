let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let myFormularioHoras = document.querySelector("#myFormularioHoras");
let Rol = document.querySelector("[name='Rol']");

let campus = {};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: [], Niveles : [], roadMap : []};
    listaSedes();
    listaSedes1();
    myFormularioCampus.reset();
});

let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

let listaSedes1 = ()=>{
    let opciones = document.querySelector("[name='sede1']");
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
    let programa = document.querySelector("[name='clase']");
    programa.innerHTML = null;
    console.log(data);
    let sede = data.sede;
    let rol = data.Rol;
    if(rol == "camper"){
        campus[`${sede}`]["Camper"].unshift(data);
        programa.insertAdjacentHTML("beforeend", `
        <option value="Programación">Programación</option>
        <option value="Ingles">Ingles</option>
        <option value="Ser">Ser</option>
        `);
    }if (rol == "trainer"){
        campus[`${sede}`]["Trainers"].unshift(data);
        programa.insertAdjacentHTML("beforeend", `
        <option value="Programación">Programación</option>
        `);
    }
    console.log(data)
    console.log(campus);
    myFormularioCampers.reset();
})

myFormularioHoras.addEventListener("submit", (e)=>{
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    let clase = data.clase;
    let rol = data.Rol;
    let sede1 = data.sede1;
    delete data.rol;
    campus[`${sede1}`]["Camper"].unshift(data);
    if(rol == "camper"){
        campus[`${sede1}`]["Camper"].unshift(data);
    }if (rol == "trainer"){
        campus[`${sede1}`]["Trainers"][`${clase}`].unshift(data);
    }
    console.log(campus);
    console.log(data);
    myFormularioHoras.reset();
})