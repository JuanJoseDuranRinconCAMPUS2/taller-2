
console.log("%c¡Hola Bienvenido!",
            "background:linear-gradient(#000, #555); color:#fff; padding: 5px 10px;");
console.log("Bienvenido al Standard Grading System sigue los siguientes pasos Porfavor");
Name = prompt("ingresa tu Nombre");
Note = prompt("ingresa tu Nota");
Protifiency = ["Supera el nivel de competencia", "Demuestra competencia", "Se acerca a la competencia", "Muy por debajo del nivel de competencia", "Carece de toda competencia",  "No se ha realizado ningún intento"];
honesty = ["Excelente Eres El Mejor", "Vamos estas cerca de la cima", "Falta por mejorar ¡animo!", "Tienes que esforzarte mucho mas", "¿acaso lo intentaste enserio?", "Que quieres que te diga caso perdido"];
let tabla = [
    {Traditional: "90-100", pointRange: "12-14", Letter: "A", SBGRating: 4, ProficiencyLevelWithStandard: "Exceeds Proficiency"},
    {Traditional: "80-89", pointRange: "9-11", Letter: "B", SBGRating: 3, ProficiencyLevelWithStandard: "Demostrates Proficiency"},
    {Traditional: "70-79", pointRange: "6-8", Letter: "C", SBGRating: 2, ProficiencyLevelWithStandard: "Approaches Proficiency"},
    {Traditional: "60-69", pointRange: "3-5", Letter: "D", SBGRating: 1, ProficiencyLevelWithStandard: "Falls Well Below Proficiency"},
    {Traditional: "<60", pointRange: "1-2", Letter: "E", SBGRating: 0, ProficiencyLevelWithStandard: "Lacks All Proficiency"},
    {Traditional: "0", pointRange: "0", Letter: "F", SBGRating: 0, ProficiencyLevelWithStandard: "No Attempt Made"}
    ];

console.table(tabla, ['Traditional', 'pointRange', 'Letter', 'SBGRating', 'ProficiencyLevelWithStandard']);

if (Note >= 90 && Note <= 100) {
    SBGRating = 4;
    level = "A"
    console.log(`Estimado ${Name} su calificacion de ${Note} \n lo ha clasificado en el nivel ${level}, \n estado: ${Protifiency[0]}, \n Observación: ${honesty[0]}`)
  } else if (Note >= 80 && Note <= 89) {
    SBGRating = 3;
    level = "B"
    console.log(`Estimado ${Name} su calificacion de ${Note} \n lo ha clasificado en el nivel ${level}, \n estado: ${Protifiency[1]}, \n Observación: ${honesty[1]}`)
  } else if (Note >= 70 && Note <= 79) {
    SBGRating = 2;
    level = "C"
    console.log(`Estimado ${Name} su calificacion de ${Note} \n lo ha clasificado en el nivel ${level}, \n estado: ${Protifiency[2]}, \n Observación: ${honesty[2]}`)
  }else if (Note > 60 && Note <= 69) {
    SBGRating = 1;
    level = "D"
    console.log(`Estimado ${Name} su calificacion de ${Note} \n lo ha clasificado en el nivel ${level}, \n estado: ${Protifiency[3]}, \n Observación: ${honesty[3]}`)
  }else if (Note >= 1 && Note < 60) {
    SBGRating = 0;
    level = "E"
    console.log(`Estimado ${Name} su calificacion de ${Note} \n lo ha clasificado en el nivel ${level}, \n estado: ${Protifiency[4]}, \n Observación: ${honesty[4]}`)
  }else if (Note == 0) {
    SBGRating = 0;
    level = "F"
    console.log(`Estimado ${Name} su calificacion de ${Note} \n lo ha clasificado en el nivel ${level}, \n estado: ${Protifiency[5]}, \n Observación: ${honesty[5]}`)
  }

  console.log("%c Esos Fueron sus resultados, Hasta pronto",
  "background:linear-gradient(#000, #555); color:#FFD700; padding: 5px 10px;");