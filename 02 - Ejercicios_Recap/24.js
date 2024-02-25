const trabajadores = {
    Pedro: {
    puesto: 'empleado',
    edad: 40
    },
    Ana: {
    puesto: 'becario',
    edad: 34
    },
    Mike: {
    clasificación: 'becario',
    edad: 37
    },
    Oscar: {
    puesto: 'empleado',
    edad: 35
    },
    Juan: {
    puesto: 'becario',
    edad: 29
    },
    Marta: {
    puesto: 'jefe',
    edad: 26
    },
    Maria: {
    puesto: 'empleado',
    edad: 28
    },
    Pablo: {
    puesto: 'jefe',
    edad: 36
    },
    }
    // Ordenar por Jefe, Empleado, becario y por edad:
    // Buscamos los jefes
    let trabajadoresOrdenados = {
        jefes: [],
        empleados: [],
        becarios: [],
    }
    function ordenarPorEdad(a, b){
        return a.edad -b.edad;
    }
    for (const nombre in trabajadores){
        const trabajador = trabajadores[nombre];
        const { puesto, edad} = trabajador;
        switch (puesto) {
            case "jefe" :
                trabajadoresOrdenados.jefes.push({nombre, edad});
                break;
            case "empleado" :
                trabajadoresOrdenados.empleados.push({nombre, edad});
                break;
            case "becario" :
                trabajadoresOrdenados.becarios.push({nombre, edad});
                break;
        }
    }
    
    console.log(trabajadoresOrdenados);