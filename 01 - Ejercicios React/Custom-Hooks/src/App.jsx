import { useEffect, useState } from "react";
import "./App.css";
import { useCounter } from "./components/hook/Counter";
import { useDebounce } from "./components/hook/useDebounce";
import { useToggle } from "./components/component/Toggle";
import useWindowSize from "./components/hook/Window";
import PokemonComponent from "./components/component/PokemonComponent";

export default function App() {
  // Hook de contador
  const { count, handleIncrement, handleDecrement } = useCounter(0);

  // Hook para el debouncing de un input
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  // Función para manejar los cambios en el input
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Hook para el toggle
  const [toggleState, toggleHandler] = useToggle(false); // Asegúrate de inicializar correctamente según tu implementación de useToggle

  // Window size
  const { width, height } = useWindowSize();

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
      </div>

      <div>
        <p>Valor en tiempo real: {value}</p>
        <p>Valor debounced: {debouncedValue}</p>
        <input type="text" value={value} onChange={handleChange} />
      </div>

      <div>
        <h3>Toggle: {toggleState.toString()}</h3>
        <button onClick={toggleHandler}>Toggle</button>
      </div>

      <div className="App">
        <h1>La ventana mide</h1>
        <h2>Ancho: {width}</h2>
        <h2>Alto: {height}</h2>
      </div>
      <PokemonComponent />
    </div>
  );
}
