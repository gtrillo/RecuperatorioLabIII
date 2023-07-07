class Persona {
    #nombre;
    #id;
    #apellido;
    #edad;

    constructor(id, nombre, apellido, edad) {
        this.#id = id;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }

    tostring() {
        return "ID: " + this.#id + "\n" +
            "Nombre: " + this.#nombre + "\n" +
            "Apellido: " + this.#apellido + "\n" +
            "Edad: " + this.#edad + "\n";
    }

    getId() {
        return this.#id;
    }

    setId(nuevoId) {
        this.#id = nuevoId;
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    getApellido() {
        return this.#apellido;
    }

    setApellido(nuevoApellido) {
        this.#apellido = nuevoApellido;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }
}

class Empleado extends Persona {
    #sueldo;
    #ventas;
  
    constructor(id, nombre, apellido, edad, sueldo, ventas) {
      super(id, nombre, apellido, edad);
      this.#sueldo = sueldo;
      this.#ventas = ventas;
    }
  
    getSueldo() {
      return this.#sueldo;
    }
  
    setSueldo(nuevoSueldo) {
      this.#sueldo = nuevoSueldo;
    }
  
    getVentas() {
      return this.#ventas;
    }
  
    setVentas(nuevasVentas) {
      this.#ventas = nuevasVentas;
    }
  }
  
  class Cliente extends Persona {
    #compras;
    #telefono;
  
    constructor(id, nombre, apellido, edad, compras, telefono) {
      super(id, nombre, apellido, edad);
      this.#compras = compras;
      this.#telefono = telefono;
    }
  
    getCompras() {
      return this.#compras;
    }
  
    setCompras(nuevasCompras) {
      this.#compras = nuevasCompras;
    }
  
    getTelefono() {
      return this.#telefono;
    }
  
    setTelefono(nuevoTelefono) {
      this.#telefono = nuevoTelefono;
    }
  }
  