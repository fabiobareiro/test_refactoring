var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
   
    let nuevoArreglo = this.horarios.filter(horario => horario != horarioReservado)
    this.horarios = nuevoArreglo;
   
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
            return promedio(this.calificaciones);
        }
}

function sumatoria(numeros){
    var suma = 0;
    numeros.forEach(element => { suma += element });
    return suma;
}

function promedio(numeros) {
    promedio = 0;
    var promedio = sumatoria(numeros) / numeros.length;
    return Math.round(promedio * 10) / 10;
}