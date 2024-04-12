import "./Home.css"
import { Gallery } from "../../components/Gallery/Gallery"
import { Header } from "../../components/Header/Header"
import { Footer, Title } from "../../components"
import { SubTitle } from "../../components/SubTitle/SubTitle"




export const Home = () => {
  return (
    <div className="container-home">
      <Header><Title text="Rick and Morty" /></Header>
      <SubTitle text="Personajes de Rick and Morty" />
      <Gallery />
      <Footer />
    </div>
  )
}
