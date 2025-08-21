// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. 
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo(){

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    let amigacho =document.getElementById('amigo').value;
//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    amigos.push(amigacho);
    // amigacho=document.querySelector('ul');

    
      

//Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
        if(document.getElementById('amigo').value===""){
        alert('por favor, inserte un nombre');
        return;
        }
   
        

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = '';
        // amigacho.innerHTML='';
        actualizarLista();


//verefica si guarda el array los amigos 
    console.log(amigos);

    

    
}


//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
function actualizarLista(){

//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.    
    let lista = document.getElementById('listaAmigos');

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.    
    lista.innerHTML='';

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++) {
      let elemento = document.createElement('li');
      
//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.      
       elemento.textContent= amigos[i];
       lista.appendChild(elemento); 
    }
  }


   

  
    
function sortearAmigo() {
//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.    
    if (amigos.length===0){
        alert('que triste no tenes amigos agregados');
        return;
    }
//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    let nombreSorteado = amigos[indiceAleatorio];

//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML=`el ganador es: ${nombreSorteado}`;
   
}