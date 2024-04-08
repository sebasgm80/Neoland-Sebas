import { useState } from 'react'
import './App.css'
import { getSaludo } from './components/Pages/Basic/Basic'
import { Button } from './components/Button/Button'
import  Header from './components/Header/Header'
import { Title } from './components/Title/Title'
import { Paragraph } from './components/Paragraph/Paragraph'
import { SubTitle } from './components/SubTitle/SubTitle'




function App() {
  
  const [count, setCount] = useState(0);
  
  return (
    <>
      <Header />
      <Title text="Welcome to Components ReactJS" />
      <SubTitle text="This is a example components with ReactJS" />
      <h2 className="saludo">{getSaludo(count)}</h2>
      <Button funcionSeteadoraEstado={setCount} valorActual={count} /> 
      <Paragraph text="Esto es una prueba de texto para ver si funciona" />
    </>
  )
}

export default App
