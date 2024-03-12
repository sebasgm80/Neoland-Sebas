// Importamos mongoose y dotenv
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Movie = require("../../api/models/Movie.models");
dotenv.config();

// Ejemplo de seed que hemos cogido para hacer pruebas
const movieDtaSet = [
    {
        title: "Avengers: Endgame",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        year: 2019,
        released: true
    },
    {
        title: "The Godfather",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        year: 1972,
        released: true
    },
    {
        title: "The Dark Knight",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        year: 2008,
        released: true
    },
    {
        title: "Inception",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        year: 2010,
        released: true
    },
]

// Hacemos la funcion que siembra la semilla para poder utilizarla en el index y ponerla en nuestra BD
// Importo la mongo uri para decirle donde quiero que se conecte
const MONGO_URI = process.env.MONGO_URI;

// Creamos la funcion
const createSeed = () => {
    mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async () => {
        // Bamos a buscar con el metodo find si hay algun elemento en la base de datos
        //Si hay algun elemento lo borramos con el metodo drop()
        //El metodo find() busca algo dentro de ese modelo de la DB
        const allMovies = await Movie.find();
        if (allMovies.length > 0) {
            //Eliminamos los datos que esten dentro y dejamos la DB vacia
            //Se siembra sobre vacio en la DB
            await Movie.collection.drop();
            console.log("Se a borrado la DB y se ha creado una nueva");
        }
    })
    .catch((error) => {
        console.log("Error en la base de datos", error.message);
    })
    .then(async () => {
        //Hay que transformar la informacion del objeto que nos dan y hay que instanciarlo
        //(crear un objeto nuevo con esto) a partir de los datos del objeto dado
        //Metemos cada elemento del array original dentro de nuestra coleccion de la DB
        //con el esquema de datos del modelo Movie que tiene que coincidir
        const allMoviesModelOk = movieDtaSet.map((movie) => new Movie(movie));
        // Usamos insertMany() por que son varios si solo adjunto un elemento con
        // mongo DB usaria save()
        await Movie.insertMany(allMoviesModelOk);
        console.log("Se ha insertado la DB");
    })
    .catch((error) => {
        console.log("Error en la base de datos", error.message);
    })
    .finally(() => {
        mongoose.disconnect();
    })
}

//Exportamos la funcion
module.exports = createSeed;
