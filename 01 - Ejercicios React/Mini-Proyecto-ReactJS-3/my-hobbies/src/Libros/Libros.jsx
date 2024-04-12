import "./Libros.css"

// Traer las props y acceder a las claves
export const CardLibro = ({bookImage, title}) => {
  return (
    <figure>
        <img src={bookImage} alt={title} />
        <h3 className="title">{title}</h3>
    </figure>
  )
}