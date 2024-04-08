import './App.css'
import { Footer,  Main, Header, Image, Paragraph, SubTitle, Title } from './Components/index.js'



function App() {


  return (
    <>
      <Header><Title title="Ejercicios React" /></Header>
      <Main>
      <Title title=" React: El futuro de las interfaces web" />
      <SubTitle subTitle="Descubre qué es React, sus ventajas y por qué deberías aprenderlo." />
      <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="imagen de un arbol" width={500} height={300}/>
      <Paragraph text="React es una biblioteca JavaScript para crear interfaces de usuario interactivas.
Es una herramienta popular y poderosa que te permite crear aplicaciones web con mayor rapidez y facilidad.
React se basa en componentes, lo que facilita la reutilización del código y la creación de interfaces modulares.
En esta entrada, aprenderás los conceptos básicos de React y por qué es una excelente opción para el desarrollo web moderno.
" />
      
      <Title title="Dominando los componentes de React " />
      <SubTitle subTitle="Aprende a crear, usar y reutilizar componentes para construir interfaces escalables." />
      <Image src="https://t4.ftcdn.net/jpg/04/39/12/89/240_F_439128927_1MA5jU4I6GjDpHW4O9eaee4Vf2EcGj47.jpg" alt="imagen de un arbol" width={500} height={300}/>
      <Paragraph text="Los componentes son la base de React.
Cada componente es una pieza independiente de la interfaz de usuario.
Los componentes pueden ser reutilizados en diferentes partes de la aplicación.
En esta entrada, aprenderás a crear componentes, pasar datos entre ellos y utilizar diferentes tipos de componentes.
" />
    </Main>
    <Footer/>
    </>
  )
}

export default App
