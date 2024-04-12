import "./DeportesGallery.css";

// Traer las props y acceder a las claves
export const CardDeportes = ({logo, name, name1}) => {
  return (
    <figure1>
        
        <img src={logo} alt={name} />
        <h3 className="name1">{name1}</h3>
        <h3 className="name">{name}</h3>
    </figure1>
  )
}