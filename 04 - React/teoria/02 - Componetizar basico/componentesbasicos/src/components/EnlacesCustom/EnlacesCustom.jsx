// rafce (react arrow function expression)
// import React from 'react' (no es necesario importar React)
// Para poder componetizar los enlaces tenemos que desacoplar el enlace de los otros elementos de la aplicación
// Para hacer componentes dinamicos usamos las PROPS
// {url, src, clase, alt } = props
import './EnlacesCustom.css'
export const EnlacesCustom = ({url, src, clase, alt }) => {
    return (
        <a href={url} target="_blank">
            <img src={src} className={clase} alt={alt} />
        </a>
    )
}

