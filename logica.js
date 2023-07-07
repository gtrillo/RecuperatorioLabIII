let personas = [];
var selectElement = document.getElementById("sltFiltro");
const checkboxId = document.getElementById('chkId');
const checkNombre = document.getElementById('chkNombre');
const checkApellido = document.getElementById('chkApellido');
const checkEdad = document.getElementById('chkEdad');
const checkSueldo = document.getElementById('chkSueldo');
const checkVentas = document.getElementById('chkVentas');
const checkCompras = document.getElementById('chkCompras');
const checkTelefono = document.getElementById('chkTelefono');


const json = [
    {
      "id": 1,
      "nombre": "Marcelo",
      "apellido": "Luque",
      "edad": 45,
      "ventas": 15000,
      "sueldo": 2000
    },
    {
      "id": 2,
      "nombre": "Ramiro",
      "apellido": "Escobar",
      "edad": 35,
      "ventas": 6000,
      "sueldo": 1000
    },
    {
      "id": 3,
      "nombre": "Facundo",
      "apellido": "Cairo",
      "edad": 30,
      "ventas": 500,
      "sueldo": 15000
    },
    {
      "id": 4,
      "nombre": "Fernando",
      "apellido": "Nieto",
      "edad": 18,
      "compras": 8000,
      "telefono": "152111131"
    },
    {
      "id": 5,
      "nombre": "Manuel",
      "apellido": "Loza",
      "edad": 20,
      "compras": 50000,
      "telefono": "42040077"
    },
    {
      "id": 666,
      "nombre": "Nicolas",
      "apellido": "Serrano",
      "edad": 23,
      "compras": 7000,
      "telefono": "1813181563"
    }
  ];

  var crearLista = function (json) {
    var personas = [];
    for (let i = 0; i < json.length; i++) {
      if ('ventas' in json[i]) {
        var empleado = new Empleado(
          json[i].id,
          json[i].nombre,
          json[i].apellido,
          json[i].edad,
          json[i].sueldo,
          json[i].ventas
        );
        personas.push(empleado);
      } else {
        var cliente = new Cliente(
          json[i].id,
          json[i].nombre,
          json[i].apellido,
          json[i].edad,
          json[i].compras,
          json[i].telefono
        );
        personas.push(cliente);
      }
    }
    return personas;
  };
  let abrirFila = function () {
    let filas = document.querySelectorAll('tr');
    filas.forEach((fila) => {
        const idFila = fila.getAttribute('id');
        if (idFila) {
            let persona = obtenerInstanciaPersona(idFila);
            fila.removeEventListener('click', abrirFormulario);
            fila.addEventListener('click', abrirFormulario.bind(null, persona));
        }
    });
};
  personas = crearLista(json);
  
  //fin lista inicial
  selectElement.addEventListener("change", function () {
    var selectedValue = selectElement.value;
    document.getElementById("tablaPersonas").innerHTML = crearTabla(personas, selectedValue);
    abrirFila();
  });
  
  const checkboxes = [
    'chkId', 'chkNombre', 'chkApellido', 'chkEdad', 'chkSueldo',
    'chkVentas', 'chkCompras', 'chkTelefono'
  ];
  
  checkboxes.forEach((checkbox) => {
    const element = document.getElementById(checkbox);
    element.addEventListener('click', function () {
      document.getElementById('tablaPersonas').innerHTML = crearTabla(personas, selectElement.value);
    });
  });
  
  var crearTabla = function (lista, filtarPor) {
    let stringTable = "<tr>";
  console.log("entre")
    if (chkId.checked) {
      stringTable += "<th id='labelId'>Id</th>";
    }
    if (chkNombre.checked) {
      stringTable += "<th id='labelNombre'>Nombre</th>";
    }
    if (chkApellido.checked) {
      stringTable += "<th id='labelApellido'>Apellido</th>";
    }
    if (chkEdad.checked) {
      stringTable += "<th id='labelEdad'>Edad</th>";
    }
    if (chkSueldo.checked) {
      stringTable += "<th id='labelSueldo'>Sueldo</th>";
    }
    if (chkVentas.checked) {
      stringTable += "<th id='labelVentas'>Ventas</th>";
    }
    if (chkCompras.checked) {
      stringTable += "<th id='labelCompras'>Compras</th>";
    }
    if (chkTelefono.checked) {
      stringTable += "<th id='labelTelefono'>Telefono</th>";
    }
  
    stringTable += "</tr>";
  
    for (let elem of lista) {
      if (
        filtarPor.toLowerCase() == "todos" ||
        (filtarPor == "empleado" && elem instanceof Empleado) ||
        (filtarPor == "cliente" && elem instanceof Cliente)
      ) {
        let fila = "<tr id='" + elem.getId() + "'>";
  
        if (chkId.checked) {
          fila += "<td>" + elem.getId() + "</td>";
        }
        if (chkNombre.checked) {
          fila += "<td>" + elem.getNombre() + "</td>";
        }
        if (chkApellido.checked) {
          fila += "<td>" + elem.getApellido() + "</td>";
        }
        if (chkEdad.checked) {
          fila += "<td>" + elem.getEdad() + "</td>";
        }
        if (elem instanceof Empleado) {
          if (chkSueldo.checked) {
            fila += "<td>" + elem.getSueldo() + "</td>";
          }
          if (chkVentas.checked) {
            fila += "<td>" + elem.getVentas() + "</td>";
          }
        }
        if (elem instanceof Cliente) {
          fila += "</td>"
          fila += "<td>"
          fila += "</td>"
          fila += "<td>"
          if (chkCompras.checked) {
            fila += "<td>" + elem.getCompras() + "</td>";
          }
          if (chkTelefono.checked) {
            fila += "<td>" + elem.getTelefono() + "</td>";
          }
        }
  
        fila += "</tr>";
        stringTable += fila;
      }
    }
  
    return stringTable;
  };
  
  document.getElementById("tablaPersonas").innerHTML = crearTabla(personas, selectElement.value);
  
  var manejadorFormAbm = function (accion) {
    formularioLista = document.getElementById("formularioInicio");
    formularioAbm = document.getElementById("formularioAbm");
    if (accion == 'ocultar') {
        formularioAbm.style.display = "none";
        formularioLista.style.display = "block";
    } else {
        formularioLista.style.display = "none";
        formularioAbm.style.display = "block";
    }
}
manejadorFormAbm('ocultar');
btnAgregar.addEventListener("click", function () {
    elementosEmpleado.style.display = "none";
    manejadorFormAbm('dibujar');
    selectTipo = document.getElementById("selectTipo");
    selectTipo.style.display = "block";
    btnAceptar.style.display = "block";
});
btnCancelar.addEventListener("click", function () {
    manejadorFormAbm('ocultar');
    limpiarFormAbm();

});

var agregarALaLista = function () {
  try {
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let edad = document.getElementById("txtEdad").value;
    let sueldo = document.getElementById("txtSueldo").value;
    let ventas = document.getElementById("txtVentas").value;
    let compras = document.getElementById("txtCompras").value;
    let telefono = document.getElementById("txtTelefono").value;

    if (typeof nombre !== 'string') {
      throw new Error("El campo nombre debe ser una cadena de texto.");
    }
    if (typeof apellido !== 'string') {
      throw new Error("El campo apellido debe ser una cadena de texto.");
    }
    if (isNaN(parseInt(edad)) || edad < 15) {
      throw new Error("El campo edad debe ser un valor numérico y mayor a 15");
    }

    let id = dameUnId(personas);
    if (sueldo && ventas) {
      if (isNaN(parseInt(sueldo)) || sueldo < 1) {
        throw new Error("El campo sueldo debe ser un valor numérico mayor a 0.");
      }
      if (isNaN(parseInt(ventas)) || ventas < 1) {
        throw new Error("El campo sueldo debe ser un valor numérico mayor a 0.");
      }
      let empleado = new Empleado(id, nombre, apellido, edad, sueldo, ventas);
      personas.push(empleado);
    } else if (compras && telefono) {
      if (isNaN(parseInt(compras))) {
        throw new Error("El campo compras debe ser un valor numérico.");
      }
      if (isNaN(parseInt(telefono))) {
        throw new Error("El campo compras debe ser un valor numérico.");
      }
      let cliente = new Cliente(id, nombre, apellido, edad, compras, telefono);
      personas.push(cliente);
    } else {
      throw new Error("Por favor, complete todos los campos requeridos.");
    }

    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
};

//////importantisimo poner estooo
///es para abrir la fila
let personaSeleccionada;

function abrirFormulario(persona) {
    btnAceptar.style.display = "none";
    manejadorFormAbm("dibujar");
    mostrarPersona(persona);
    personaSeleccionada = persona;
}
btnModificar.addEventListener("click", modificarPersonaSeleccionada);
function modificarPersonaSeleccionada() {

    if (personaSeleccionada) {
        modificarPersona(personaSeleccionada);
        manejadorFormAbm("ocultar");
        document.getElementById("tablaPersonas").innerHTML = crearTabla(personas, selectElement.value);
        abrirFila();
        personaSeleccionada = null;
    }
}
function obtenerInstanciaPersona(numeroFila) {
    for (let elem of personas) {
        if (numeroFila == elem.getId()) {
            return elem;
        }
    }
    return null;
}

abrirFila();
////hasta aca no te olvidez no se bien que hace pero lo logre
selectTipo.addEventListener("change", function () {
  let valorSeleccionado = selectTipo.value;
  switch (valorSeleccionado) {
    case "empleado":
      elementosEmpleado.style.display = "block";
      elementosCliente.style.display = "none";
      break;
    case "cliente":
      elementosEmpleado.style.display = "none";
      elementosCliente.style.display = "block";
      break;
  }
});

btnAceptar.addEventListener("click", function () {
  agregarALaLista();
  manejadorFormAbm('ocultar');
  limpiarFormAbm();
  document.getElementById("tablaPersonas").innerHTML = crearTabla(personas, selectElement.value);
  abrirFila();

});
btnEliminar.addEventListener("click", function () {
  borrarPersona(personaSeleccionada);
  manejadorFormAbm('ocultar');
  limpiarFormAbm();
  document.getElementById("tablaPersonas").innerHTML = crearTabla(personas, selectElement.value);
  abrirFila();

});

let dameUnId = function (lista) {
  return id = lista.length + 1;
}

function mostrarPersona(persona) {
  formularioAbm = document.getElementById("formularioAbm");
  formularioAbm.style.display = "block";
  formularioLista.style.display = "none";
  elementosEmpleado = document.getElementById("elementosEmpleado");
  elementosCliente = document.getElementById("elementosCliente");
  labelTipo = document.getElementById("lblTipo");
  selectTipo = document.getElementById("selectTipo");
  labelTipo.style.display = "none";
  selectTipo.style.display = "none";
  console.log(persona);
  if (persona instanceof Empleado) {
    document.getElementById("txtApellido").value = persona.getApellido();
    document.getElementById("txtEdad").value = persona.getEdad();
    document.getElementById("txtNombre").value = persona.getNombre();
    document.getElementById("txtSueldo").value = persona.getSueldo();
    document.getElementById("txtVentas").value = persona.getVentas();
    elementosEmpleado.style.display = "block";
    elementosCliente.style.display = "none";
  } else {
    document.getElementById("txtApellido").value = persona.getApellido();
    document.getElementById("txtEdad").value = persona.getEdad();
    document.getElementById("txtNombre").value = persona.getNombre();
    document.getElementById("txtCompras").value = persona.getCompras();
    document.getElementById("txtTelefono").value = persona.getTelefono();
    elementosEmpleado.style.display = "none";
    elementosCliente.style.display = "block";
  }
}


var limpiarFormAbm = function () {
  var campos = ["txtNombre", "txtApellido", "txtEdad", "txtSueldo", "txtVentas", "txtCompras", "txtTelefono"];

  campos.forEach(function (campo) {
    document.getElementById(campo).value = "";
  });
};

function modificarPersona(personaAModificar) {
  try {
    let apellido = document.getElementById("txtApellido").value;
    let nombre = document.getElementById("txtNombre").value;
    let edad = document.getElementById("txtEdad").value;
    let sueldo = document.getElementById("txtSueldo").value;
    let ventas = document.getElementById("txtVentas").value;
    let compras = document.getElementById("txtCompras").value;
    let telefono = document.getElementById("txtTelefono").value;

    if (typeof apellido !== 'string' || typeof nombre !== 'string' || isNaN(parseInt(edad))) {
      throw new Error("Por favor, ingrese los campos correctamente.");
    }

    if (personaAModificar instanceof Empleado) {
      if (isNaN(parseInt(sueldo)) || isNaN(parseInt(ventas))) {
        throw new Error("Por favor, ingrese los campos correctamente.");
      }
      personaAModificar.setApellido(apellido);
      personaAModificar.setNombre(nombre);
      personaAModificar.setEdad(edad);
      personaAModificar.setSueldo(sueldo);
      personaAModificar.setVentas(ventas);
    } else if (personaAModificar instanceof Cliente) {
      if (isNaN(parseInt(compras)) || typeof telefono !== 'string') {
        throw new Error("Por favor, ingrese los campos correctamente.");
      }
      personaAModificar.setApellido(apellido);
      personaAModificar.setNombre(nombre);
      personaAModificar.setEdad(edad);
      personaAModificar.setCompras(compras);
      personaAModificar.setTelefono(telefono);
    } else {
      throw new Error("No se puede modificar la persona especificada.");
    }
  } catch (error) {
    alert(error.message);
  }
}

let borrarPersona = function (personaAEliminar) {
  for (let i = 0; i < personas.length; i++) {
      if (personaAEliminar.getId() == personas[i].getId()) {
          personas.splice(i, 1);
          break;
      }
  }
}

const labels = [
  "labelId",
  "labelNombre",
  "labelApellido",
  "labelEdad",
  "labelSueldo",
  "labelVentas",
  "labelCompras",
  "labelTelefono"
];

labels.forEach(label => {
  const element = document.getElementById(label);
  element.removeEventListener("click", handleLabelClick); // Eliminar el controlador de eventos anterior, si existe
  element.addEventListener("click", handleLabelClick);
});

function handleLabelClick() {
  const elementId = this.id;
  personasOrdenadas = ordenarListaPersonas(personas, elementId);
  personasOrdenadas.forEach(element => {
    console.log(element.getNombre());
  });
  document.getElementById("tablaPersonas").innerHTML = crearTabla(personasOrdenadas, selectElement.value);
}

function ordenarListaPersonas(personas, atributo) {
  return personas.sort((a, b) => {
    const valorA = obtenerValor(a, atributo);
    const valorB = obtenerValor(b, atributo);

    if (typeof valorA === 'string' && typeof valorB === 'string') {
      return valorA.localeCompare(valorB);
    } else if (typeof valorA === 'number' && typeof valorB === 'number') {
      return valorA - valorB;
    } else {
      return 0;
    }
  });
}

function obtenerValor(objeto, atributo) {
  const etiqueta = atributo.startsWith('label') ? atributo.substring(5) : atributo;
  const metodo = `get${etiqueta.charAt(0).toUpperCase()}${etiqueta.slice(1)}`;

  if (typeof objeto[metodo] === 'function') {
    return objeto[metodo]();
  } else if (objeto.hasOwnProperty(atributo)) {
    return objeto[atributo];
  } else {
    return null;
  }
}
btnCalcular.addEventListener("click", function () {
  txtEdadPromedio.value = calcularEdadPromedio(personas, selectElement.value);
});
function calcularEdadPromedio(lista, filtro) {
  let edadesFiltradas = [];

  if (filtro === "empleado") {
    edadesFiltradas = lista.filter(item => item instanceof Empleado);
  } else if (filtro === "cliente") {
    edadesFiltradas = lista.filter(item => item instanceof Cliente);
  } else if (filtro === "todos") {
    edadesFiltradas = lista;
  } else {
    return 0;
  }

  let sumaEdades = 0;
  const cantidadEdades = edadesFiltradas.length;

  console.log("-------------------------------");
  edadesFiltradas.forEach(item => {
    sumaEdades += item.getEdad();
    console.log(item.getEdad());
  });

  return cantidadEdades !== 0 ? sumaEdades / cantidadEdades : 0;
}
