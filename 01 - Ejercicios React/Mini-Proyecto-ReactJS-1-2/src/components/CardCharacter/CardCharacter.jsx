import "./CardCharacter.css"

// Traer las props y acceder a las claves
export const CardCharacter = ({image, name, status, origin }) => {
  return (
    <figure>
        <img src={image} alt={name} />
        <h3 className="name">{name}</h3>
        <h3 className="status">{status}</h3>
        <h3 className="origin">{origin}</h3>
    </figure>
  )
}

// Traer las props y debajo hacer desstructuring
/* export const CardCharacter = ({props}) => {
    const {image, name} = props
    return (
      <figure>
          <img src={props.image} alt={props.name} />
          <h3>{props.name}</h3>
      </figure>
    )
  } */

  // Traer las props por destructuring
/* export const CardCharacter = ({image, name}) => {
    return (
      <figure>
          <img src={image} alt={name} />
          <h3>{name}</h3>
      </figure>
    )
  } */


