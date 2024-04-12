import "./Songs.css";

// Traer las props y acceder a las claves
export const CardSong = ({name, artist}) => { 
  return (
    <div4 className="card-songs">
        <h3 className="nameSong">{name}</h3>
        
        <h3 className="nameArtist">  (Artista: {artist})</h3>
        
    </div4>
  )
}