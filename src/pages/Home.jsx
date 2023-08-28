import ShowCharacters from "../components/ShowCharacters"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <header>
        <h1>AGENDA</h1>
        <NavLink to ="/create ">
            <button>Añadir cita</button></NavLink></header>
        <ShowDates />
    </div>
  )
}

export default Home;