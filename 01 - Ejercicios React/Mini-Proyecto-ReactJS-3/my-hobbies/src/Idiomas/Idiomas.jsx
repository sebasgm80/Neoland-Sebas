

import "./Idiomas.css"


// Traer las props y acceder a las claves
export const CardIdiomas = ({language, wrlevel, splevel}) => {
  return (
    <div3 className="card-idiomas">
        <h3>Idioma: {language}</h3>
        <p>Nivel de escritura: {wrlevel}</p>
        <p>Nivel de lectura: {splevel}</p>
        
    </div3>
  )
}