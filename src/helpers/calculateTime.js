import moment from 'moment'
export const calcularTiempoTranscurrido = (marcaTiempo) => {
        // Crea un objeto "moment" con el momento actual.
        const ahora = moment();
    
        /* Crea un objeto "moment" a partir de la marca de tiempo en formato Unix que se pasa como argumento.
           Esto convierte la marca de tiempo Unix en un objeto "moment". */
        const fechaCreacionMoment = moment(marcaTiempo);
    
    
        /* Calcula la diferencia de tiempo entre el momento actual (ahora) y la marca de tiempo de creación (fechaCreacionMoment)
           utilizando el método .diff(). Luego, crea un objeto "duration" que representa esta diferencia de tiempo. */
        const duracion = moment.duration(ahora.diff(fechaCreacionMoment));
    
        /*  Utiliza los métodos .hours(), .minutes() y .seconds() del objeto "duration" para obtener la cantidad de horas, minutos
            y segundos en la diferencia de tiempo. Estos métodos devuelven los valores numéricos de cada unidad de tiempo, que luego
            se concatenan en una cadena de texto legible para mostrar al usuario. 
        */
    
      /*   return `${duracion.hours()} horas, ${duracion.minutes()} minutos, ${duracion.seconds()} segundos`; */
       console.log(duracion.days(),duracion.hours() ,duracion.minutes(), duracion.seconds())

    if(duracion.days()>=2){
        return `${duracion.days()} dias`
    }
    else if(duracion.days()>=1 && duracion.days()<2){
        return `${duracion.days()} dia`
    }

    else if(duracion.hours()>=2){
        return `${duracion.hours()} horas`
    }
    else if(duracion.hours()>=1 && duracion.hours()<2){
        return `${duracion.hours()} hora`
    }
    else if(duracion.minutes() >=2){
        return `${duracion.minutes()} minutos`
    }
    else if(duracion.minutes()>=1 && duracion.minutes()<2){
        return `${duracion.minutes()} minuto`
    }
    else if(duracion.minutes()< 1){
        return `un momento`
    }
  }
