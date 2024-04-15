import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Header, Navbar } from './Components'


export const App = () => {
  
  return (
    <>
      <Header><h1>Basic Router v6</h1>{Navbar}</Header>
      <Outlet />
      <Footer />
    </>
  )
}


