//Constructor de Reserva con sus parametros:
var Reserva = function(horario, cantPersonas, precioXPersona, codDesc) {
    this.horario = horario;
    this.cantPersonas = cantPersonas;
    this.precioXPersona = precioXPersona;
    this.codDesc = codDesc;
}

//metodo para calcular el precio base de una reserva sin ningun descuento:
Reserva.prototype.calcularPrecioBase = function() {
    let precioBase = 0;
    precioBase = this.precioXPersona * this.cantPersonas;
    return precioBase;
}

//metodo para calcular el precio final de una reserva en base a cantidad de personas, precios y descuentos:
Reserva.prototype.calcularPrecioFinal = function() {
    
    let desc = devolverDescuentoXCantidadPersonas(this.cantPersonas);
    let precioBase = 0;
    let cantidadPersonas = 0;
    let precioPersona = 0;

    cantidadPersonas = this.cantPersonas;
    precioPersona = this.precioXPersona;
    
    precioBase = precioPersona * cantidadPersonas;

    //consultas que devuelven el descuento especifico si lo hay:
    if(devolverDescuentoXCupon(this.codDesc) === 0.15) { desc += 0.15 }
    else if(devolverDescuentoXCupon(this.codDesc) === -200) { precioBase -= 200 }
    else if(devolverDescuentoXCupon(this.codDesc) === -1) { (precioBase -= precioPersona) }

    precioBase = precioBase - (precioBase * desc);
    
    //consultas para saber si la reserva son en horarios de descuento o dias de fin de semana (tambien con descuento):
    if(adcXHorario(this.horario) === true) { precioBase - (precioBase * 0.05) }
    if(adcEsFinDeSemana(this.horario) === true) { precioBase - (precioBase * 0.10) }

    return precioBase;  

}

//|----funciones consultas para calcularPrecioFinal()----| 

function adcEsFinDeSemana(dateTime) {
    if(dateTime.getDay() === 5 || dateTime.getDay() === 6 || dateTime.getDay() === 0) {
        return true;
    }
    else {return false}
}

function adcXHorario(dateTime) {
    if(dateTime.getHours() >= 13 && dateTime.getHours() <= 14 || dateTime.getHours() >= 20 && dateTime.getHours() <= 21) {
        return true;
    }
    else {return false}   
}

function devolverDescuentoXCantidadPersonas(personas) {
    
    if(personas < 4) { return 0 }
    else if(personas >= 4 && personas <= 6) { return 0.5 }
    else if(personas >= 7 && personas <= 8) { return 0.10 }
    else if(personas > 8) { return 0.15 }
}

function devolverDescuentoXCupon(codigo) {
    if(codigo === 'DES15') { return 0.15 }
    else if(codigo === 'DES200') { return -200 }
    else if(codigo === 'DES1') { return -1 }

}

//|--------|

//Instancias de reserva1 y reserva2 como objetos de Reserva:

var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");

        


