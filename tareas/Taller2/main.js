
console.log("%c¡Ejercicio 1 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("Construir el algoritmo para un programa que ingrese tres notas de un alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje `Estudie`, de lo contrario un mensaje que diga `becado`");
const Alpha = 0;
function promedio(){
    console.log("Bienvenido estudiante por favor sigue las siguientes instrucciones")
    const Calificaciones = []
    let Notas = prompt("Ingresa el numero de notas")
    for (let i = 1; i <= Notas; i++) {
        let Nota = parseInt(prompt(`Ingresa la nota ${i} del estudiante  `));
         Calificaciones.push(Nota);
     }

    SumaTotal = Calificaciones.reduce((accumulator, currentValue) => accumulator + currentValue, Alpha);
    Promedio = SumaTotal / Notas;
    console.log(`El promedio del Estudiante es el siguiente`)
    console.log(Promedio);

}

promedio()