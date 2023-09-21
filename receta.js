let columnaId = document.getElementsByTagName("td")[4];
let listaId = [columnaId.value];

function anadir(){
  
  let dripper = prompt("Introduce el dripper V60-Kalita").toUpperCase();
  let molino = prompt ("Introduce el molino ").toUpperCase();
  let ratio = prompt("Introduce el ratio");
  let duracion = prompt("Introduce la duracion");
  let id=parseInt(prompt("Introduce un Id"));
  
  while (listaId.includes(id) || isNaN(id)) {
    alert("El ID ya existe, por favor introduce otro");
    id = parseInt(prompt("Introduce el ID nuevamente"));
  }

  listaId.push(id);
  
  let tabla = document.getElementById("tabla");

  let campo1 = document.createElement("td");
  let campo2 = document.createElement("td");
  let campo3 = document.createElement("td");
  let campo4 = document.createElement("td");
  let campo5 = document.createElement("td");

  let texto1 = document.createTextNode(dripper);
  let texto2 = document.createTextNode(molino);
  let texto3 = document.createTextNode (ratio) ;
  let texto4 = document.createTextNode (duracion);
  let texto5 = document.createTextNode (id );

  campo1.appendChild(texto1);
  campo2.appendChild(texto2 );
  campo3.appendChild(texto3);
  campo4.appendChild(texto4);
  campo5.appendChild(texto5);

  let fila = document.createElement("tr");

  fila.appendChild(campo1);
  fila.appendChild(campo2);
  fila.appendChild(campo3);
  fila.appendChild(campo4);
  fila.appendChild(campo5);

  tabla.appendChild(fila);

}


function borrar(){

  //Se crea una variable para atrapar el id de tabla 
  let tabla = document.getElementById("tabla");

  let encontrado = false;

  //Variable que almacena el id que introduce el usuario 
  let idBorrar = prompt("Indica el id a borrar");

  //Obtiene todas las filas de la tabla y se almacena en la variable filas 
  let filas = tabla.getElementsByTagName("tr");


  for (let i = 0; i < filas.length; i++){
    let fila = filas [i];//Se obtiene la fila actual en la interacion y se almacena en la variable fila
    
    let columna = fila.getElementsByTagName("td")[4];//Se obtiene el quinto elemento de la tabla en este caso id

    let texto = columna.textContent; //Se obtiene el texto del id y se almacena en una variable 

    //Compara el contenido de la variable texto con el idBorrar que introduce el usuario
    if(texto==idBorrar){
      filas[i].remove(); //Elimina la fila actual 
      let idBorrarNum = parseInt(idBorrar)
      listaId.remove(idBorrarNum);
      encontrado = true;
    }

  }

  if (!encontrado){
    alert ("No existe un registro con ese ID")
  }

}
