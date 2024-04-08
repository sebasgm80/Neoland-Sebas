import { useState } from 'react'
import './App.css'
import { EnlacesCustom, ButtomCustom } from './components'
import { dataRender } from './data/infoApp.data'


function App() {
  const [count, setCount] = useState(0)

  // funcion asincrona para el boton
  const modificarMiEstado = () => {
    setCount((value) => value + 1)
  }

  return (
    <>
      <div>
        {
          dataRender.map((item) =>  (
              <EnlacesCustom 
              key={item.alt}
              url={item.url} 
              src={item.src} 
              clase={item.clase} 
              alt={item.alt} 
              />
          ))
        }
      
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ButtomCustom 
        state={count} 
        setState={modificarMiEstado} 
        textButton={"Hola"} 
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
