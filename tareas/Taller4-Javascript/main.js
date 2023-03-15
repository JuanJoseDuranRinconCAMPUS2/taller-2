
console.log("%c¡Ejercicio 1 !",
"background:linear-gradient(#000, #FF8000); color:#fff; padding: 5px 10px;");
console.log("A través del siguiente taller, construir un menú en una función alert que gestione las siguientes opciones de menú referentes a manejo de los arrays, objetos, funciones y otras operaciones en JavaScript entre dichos temas.");


function Menu(){
    alert(
        `
         -----MENU-----
        \t \n 1. Lectura de Datos
        \t \n 2. Crear Objeto
        \t \n 3. Mostrar Objeto
        \t \n 4. Crear Array
        \t \n 5. Mostrar Array
        \t \n 6. Elimine Primer Elemento del Array
        \t \n 7. Elimine Ultimo Elemento del Array
        \t \n 8. Eliminar Cualquier Elemento del Array
        \t \n 9. Agregar Elemento al Comienzo del Array
        \t \n 10. Agregar Elemento al Final del Array
        \t \n 11. Crear Array con Objetos
        \t \n 12. Iterar Array con Objetos con FOR
        \t \n 13. Iterar Array con Objetos con ForEach
        \t \n 14. Iterrar Array con Objetos con Map y Crear Copia
        \t \n 15. Sumar Elementos de un Array
        \t \n 16. Restar Elementos de un Array
        \t \n 17. Sacar Elemento Mayor de un Array
        \t \n 18. Sacar Elemento Menor de un Array
        \t \n 0. Salor
        `
    );
};

Menu()