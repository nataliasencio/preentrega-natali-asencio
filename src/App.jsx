//importo el Navbar
import {Navbar} from "./Navbar"

const App = ()=> {
  //antes del return se escribe código js


  //desp del return se escribe código jsx
  return (
   <div> 
    <h1 style={ {color: " black", fontSize: "3rem"} }> Tienda Efecto Deporte </h1>
    {/* invoco el componente Navbar */}
    <Navbar />
   </div>
  )
}

export default App
