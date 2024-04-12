import './App.css'
import { Gallery } from './Libros/LibrosGallery'
import { Header } from './Header/Header'
import { Title } from './Title/Title'
import { SubTitle } from './SubTitle/SubTitle'
import { Footer } from './Footer/Footer'
import { Gallery1 } from './Deportes/DeportesGallery'
import { Gallery2 } from './Movies/MoviesGallery'
import { Gallery3 } from './Idiomas/IdiomasGallery'
import { Gallery4 } from './Songs/SongsGallery'


function App() {

  return (
    <>
    <div>
      <Header><Title text="Mis hobbies"/></Header>
      <SubTitle text="Libros"/>
      <Gallery />
      <SubTitle text="Deportes"/>
      <Gallery1 />
      <SubTitle text="Movies"/>
      <Gallery2 />
      <SubTitle text="Idiomas"/>
      <Gallery3 />
      <SubTitle text="Canciones"/>
      <Gallery4 />
      <Footer />
    </div>
    </>
  )
}

export default App
