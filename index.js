/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/
const msj = 'Bievenidas/os al Maratón Guayerd';
function mostrarMensaje(mensaje){
  alert(mensaje)
}

/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto en el
input.ej2-nombre. Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/

function focus(){
  const ej2Nombre = document.querySelector(".ej2-nombre");
  const ej2Resultado = document.querySelector(".ej2-resultado"); //Se rompe lindo, no?

  ej2Nombre.addEventListener("focus", ()=>{
    ej2Resultado.innerText = "El input nombre tiene el foco";
  });

  ej2Nombre.addEventListener('blur', ()=>{
    ej2Resultado.innerText = "";
  })

}

focus();

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Div = document.querySelector(".ej3-resultado");
const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();

function mostrarSaludo(txtSaludo, div_container) {

  div_container.innerHTML = `<h1>${txtSaludo}</h1>`
}

mostrarSaludo(txtSaludo, ej3Div);


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/

function leerInputs(){
  document.querySelector('.ej4-enviar').addEventListener('click', ()=>{

  document.querySelector('.ej4-resultado').innerHTML = `<p>${document.querySelector('.ej4-email').value}</p>
                                                        <p>${document.querySelector('.ej4-mensaje').value}</p>`

  })

}

leerInputs();

/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/

function suma(){

const div = document.createElement('div');
div.innerHTML = `<input type="text" id='inpt1'>
                <input type="text" id='inpt2'>
                <button id='btnSumar' type="button" name="button">Sumar</button>`

document.querySelector('.ej5').insertBefore(div, document.querySelector('.ej5-resultado'))

btnSumar.addEventListener('click', ()=>{
  const valor1= document.querySelector('#inpt1').value;
  const valor2= document.querySelector('#inpt2').value;

  if(isNaN(valor1) || isNaN(valor2)){
    document.querySelector('.ej5-resultado').innerText = "Ingreso erróneo"
  }else {document.querySelector('.ej5-resultado').innerText = Number(valor1) + Number(valor2);}

})
}

suma()


/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes.
Recorrerlos y crear los <option> según corresponda
*/
const paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Paraguay", "Perú", "Uruguay", "Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const select_paises= document.querySelector('.ej6-paises')
const select_dias= document.querySelector('.ej6-diasSemana')

select_paises.appendChild(crearOptions(paises));
select_dias.appendChild(crearOptions(diasSemana));

/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momento = ["Mañana", "Tarde", "Noche"];

function changeSelect(array){
  const select = document.querySelector('.momentos')
  const div_resultado= document.querySelector('.ej7-resultado');

  select.appendChild(crearOptions(array));

  select.addEventListener('change', ()=>{
    div_resultado.innerText= select.value;
  })

}
changeSelect(momento)


/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password", "js2020"); //Este es el password que deben comparar con el ingreso del usuario

function validarPass() {
  const entradaUsr = document.querySelector('#password');
  const btnIngresar = document.querySelector('#btn1');

  btnIngresar.addEventListener('click', () => {
    const getPass= localStorage.getItem('password');

    if (entradaUsr.value === getPass) {
      document.querySelector('.ej8-resultado').innerText = 'Password correcto'
    } else {

      document.querySelector('.ej8-resultado').innerText = 'Password incorrecto';
    }
  })
}
validarPass()

/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>

*/

const usuarios = [{
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];

function mostrarUsr(array) {
  div_resultado = document.querySelector('.ej9-resultado');
  div_resultado.innerHTML = '';
  array.forEach((el) => {
        div_resultado.innerHTML += `<div class="usuario-contenedor">
                                      <div class="fila1">
                                      <span class="title">Nombre: ${el['nombre']}</span><span>valor</span>
                                      <span class="title">NroCliente: ${el['nroCliente']}</span><span>valor</span>
                                    </div>
                                    <div class="fila2">
                                      <span class="title">DNI: ${el['dni']}</span><span>valor</span>
                                      <span class="title">Fecha Nacimiento: ${el['fechaNacimiento']}</span><span>valor</span>
                                    </div>
                                    </div>`


                              })

}

mostrarUsr(usuarios);



/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos
para poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos
  dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/


/////////////////////////////////////////////////////////////

//Entradas de datos

const horarios =['Mañana', 'Tarde', 'Noche'];
const productos=['Credito', 'Celular', 'Viaje', 'Seguros'];

//Crear formulario y listeners.
crearForm();

//Verificar si existen datos
const r = recuperarDatos()


//Funciones.-------------------------------------------------------------------

function crearForm(){
  // Me posiciono en el div contenedor y creo el form.
  const formContent = document.querySelector('.ej10-form');
  const form = document.createElement('form');
        form.setAttribute('action', 'index.html')
        form.setAttribute('method', 'post')
        form.classList.add('form10')

  //Creo los elementos del form
  const select_horarios = crearSelect(crearOptions(horarios), 'Horarios');
  const select_productos = crearSelect(crearOptions(productos), 'Productos');
  const btnGuarda = crearButton('Guardar', 'reset');
  const btnFinalizar = crearButton('Finalizar', 'button');
  const divBtns = document.createElement('div');
        divBtns.classList.add('divBtns');

  //Agrego los elementos al form
  form.appendChild(crearInput('Nombre', 'text'))
  form.appendChild(crearInput('Email', 'email'))
  form.appendChild(crearInput('Telefono', 'number'))
  form.appendChild(select_horarios);
  form.appendChild(select_productos);
  divBtns.appendChild(btnGuarda);
  divBtns.appendChild(btnFinalizar);
  form.appendChild(divBtns);


  formContent.appendChild(form);

  //Listeners------------------------------------------------------------------
  btnGuarda.addEventListener('click', ()=>{
    guardarDatos(r)

  })

  btnFinalizar.addEventListener('click', ()=>{

    const div_container = document.querySelector('.ej10-resultado');
    const datos = JSON.parse(localStorage.getItem('Usuarios'));

    div_container.innerText='';

    for(elem in datos) {

      div_container.innerHTML += `<ul>
      <h3>${datos[elem].nombre}</h3>
      <li>Email: ${datos[elem].email}</li>
      <li>Telefono: ${datos[elem].telefono} </li>
      <li>Horario de contacto: ${datos[elem].horarios}</li>
      <li>Producto: ${datos[elem].productos}</li>
      </ul>`
    };

    localStorage.removeItem('Usuarios');
  })
}

function crearInput(dato, type) {
  const label_input = document.createElement('label');
  label_input.setAttribute('for', dato.toLowerCase());
  label_input.innerText = dato + ': ';

  const input = document.createElement('input');
  input.setAttribute('type', type.toLowerCase());
  input.setAttribute('id', dato.toLowerCase());
  input.setAttribute('name', dato.toLowerCase());

  label_input.appendChild(input);

  return label_input;
}

function crearOptions(arrOptions) {
  const fragment = new DocumentFragment();

  const default_option = document.createElement('option');
  default_option.value = '';
  default_option.selected = 'selected';

  fragment.appendChild(default_option);

  arrOptions.map((elem) => {
    const option = document.createElement('option');
    option.value = elem.toLowerCase();
    option.label = elem;

    fragment.appendChild(option);
  })
  return fragment;
}

function crearSelect(options_fragment, label) {
  const label_select = document.createElement('label');
  label_select.setAttribute('for', label.toLowerCase());

  label_select.innerText = label + ': ';

  const select = document.createElement('select');
  select.setAttribute('name', label.toLowerCase())
  select.setAttribute('id', label.toLowerCase())


  select.appendChild(options_fragment);
  label_select.appendChild(select);

  return label_select;
}

function crearButton(text, type) {
  const btn = document.createElement('button');
  btn.id = text.toLowerCase();
  btn.type = type.toLowerCase();
  btn.name = text.toLowerCase();
  btn.innerText = text;

  return btn;
}

function guardarDatos(arrDatos){
  const objDatos={}
  const form10 = document.querySelector('.ej10-form')
  const elementos = form10.querySelectorAll('input, select');


  for (let i=0; i < elementos.length; i++) {
    objDatos[elementos[i].id]=elementos[i].value;
  }

  arrDatos.push(objDatos);

  localStorage.setItem('Usuarios', JSON.stringify(arrDatos));
}


function recuperarDatos() {
  const datos = localStorage.getItem('Usuarios');

  if (datos) {
    const arrDatos= JSON.parse(datos);

    return arrDatos;

  } else {arrDatos=[]}

  return arrDatos;
}
