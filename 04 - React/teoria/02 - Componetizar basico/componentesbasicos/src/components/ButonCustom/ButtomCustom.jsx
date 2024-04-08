import "./ButtomCustom.css"

export const ButtomCustom = ({state, setState, textButton}) => {
    return (
        <button onClick={() => setState((value) => value + 1)}>
            {textButton} {state}
        </button>
    )
}

// las PROPS son
// state = estado del contador
// setState = funcion para cambiar el estado
// textButton = texto del boton
// usamos value para el estado inicial

// state y setState pertenecen al padre
// 