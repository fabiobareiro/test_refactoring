var expect = chai.expect;

// test función reservarHorario(horario)

describe("Test de la funcion que permite Reservar Horario", () => {
    it("Existen tres elementos (horarios) en el array de horarios", () => {
        
        var restaurantUno = listadoDeRestaurantes[0];
        var arregloDeHorariosDeRestaurantUno = restaurantUno.horarios;

        expect(arregloDeHorariosDeRestaurantUno).to.include("13:00", "15:30", "18:00");

    })
    it("Se reserva un horario y el horario correspondiente se elimina del arreglo", () => {
    
        var restaurantUno = listadoDeRestaurantes[0];

        restaurantUno.reservarHorario("13:00");
        
        expect(restaurantUno.horarios).to.not.include('13:00');
        
    })
    it("Se intenta reservar un horario que el restaurant no posee, el arreglo se mantiene igual", () => {

        var restaurantDos = listadoDeRestaurantes[1];
        
        restaurantDos.reservarHorario("12:00");
        var arregloDeHorariosDeRestaurantDos = restaurantDos.horarios;

        expect(arregloDeHorariosDeRestaurantDos).to.include("15:00", "14:30", "12:30");

    })
    it("Se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual", () => {

        var restaurantDos = listadoDeRestaurantes[1];
        
        restaurantDos.reservarHorario();
        var arregloDeHorariosDeRestaurantDos = restaurantDos.horarios;

        expect(arregloDeHorariosDeRestaurantDos).to.include("15:00", "14:30", "12:30");
    })

})

// Test función obtenerPuntuación()

describe("Test de la funcion que permite Obtener la Puntuacion", () => {
    it("Dado un restaurant con determinadas calificaciones, la puntuación promedio se calcula correctamente", () => {

        var restaurantTres = listadoDeRestaurantes[2];

        expect(restaurantTres.obtenerPuntuacion()).to.equal(7);

    })
    it("Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0", () => {

        var restaurantCuatro = listadoDeRestaurantes[3];
        restaurantCuatro.calificaciones=[];

        expect(restaurantCuatro.obtenerPuntuacion()).to.equal(0);
    })
})

describe("Test de la funcion que permite Calificar", function(){
    it("Dada una calificacion del 1 al 10 (recibida por parametro), se aplica correctamente a un restaurant", () => {
        var restaurantCinco = listadoDeRestaurantes[4];
        
        restaurantCinco.calificar(10);
        
        expect(restaurantCinco.calificaciones).to.include(8, 3, 9, 5, 6, 7, 10);
    })
    it("Si la funcion Calificar recibe un string, la misma no se aplica", () => {
        var restaurantCinco = listadoDeRestaurantes[4];

        restaurantCinco.calificar("abc");

        expect(restaurantCinco.calificaciones).to.not.include("abc");
    })
    it("Si la funcion Calificar recibe un numero mayor a 10, la misma no se aplica", () => {
        var restaurantCinco = listadoDeRestaurantes[4];

        restaurantCinco.calificar(11);

        expect(restaurantCinco.calificaciones).to.not.include(11);
    })
    it("Si la funcion Calificar recibe un numero menor o igual a cero, la misma no se aplica", () => {
        var restaurantCinco = listadoDeRestaurantes[4];

        restaurantCinco.calificar(-1);

        expect(restaurantCinco.calificaciones).to.not.include(-1);
    })
    
})

describe("Test de la funcion que permite Buscar un Restaurante, que recibe un id Restaurante como parametro", () => {
    it("Retorna correctamente el Restaurante solicitado", () => {

        var restaurantSeis = listado.buscarRestaurante(6);

        expect(restaurantSeis==listadoDeRestaurantes[5]).to.be.true;
        
    })

})

describe("Test de la funcion que permite Obtener Restaurantes, que recibe tres filtros como parametro desde el HTML", () => {

    it("Retorna correctamente los restaurantes filtrados", () => {
        
        var restaurantesFiltrados = listado.obtenerRestaurantes("Desayuno", "Nueva York", "21:00");
        
        //una forma de hacerlo directamente es sabiendo antes el dato del id (del restaurante) que deberia dar como resultado:
        
        expect(restaurantesFiltrados[0].id).to.equal(24);

    })

    it("Solo filtra si los valores recibidos son distintos de null", () => {
        
        var restaurantesFiltrados = listado.obtenerRestaurantes("", "Nueva York", "");    
        
        //comprobamos que el array esta vacio:
        
        expect(restaurantesFiltrados).to.be.an('array').that.is.empty;
    })

})

describe("Test del objeto Reserva", () => {

    it("La funcion calcularPrecioBase() calcula correctamente el precio base", () => {
        
        //valores esperados para el calculo de precio base de la reserva1 y reserva2
        expect(reserva1.calcularPrecioBase()).to.equal(2800);

        expect(reserva2.calcularPrecioBase()).to.equal(300);

    });

    it("La funcion calcularPrecioFinal() calcula correctamente el precio final", () => {

        //valores esperados para el calculo de precio final de reserva1 y reserva2:
        expect(reserva1.calcularPrecioFinal()).to.equal(2205);

        expect(reserva2.calcularPrecioFinal()).to.equal(100);

    })
})





