import ShowCitas from "../components/ShowCitas"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <header>
        <h1>AGENDA</h1>
        <NavLink to ="/create ">
            <button>Añadir cita</button></NavLink></header>
        <ShowCitas />
    </div>
  )
}

export default Home;