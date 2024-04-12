import "./Movies.css"

// Traer las props y acceder a las claves
export const CardMovie = ({poster, name, vote, genre}) => {
  return (
    <figure2>
        <img src={poster} alt={name} />
        <h3 className="name2">{name}</h3>
        <h3 className="genre">{genre}</h3>
        <h3 className="vote">{vote}</h3>
    </figure2>
  )
}