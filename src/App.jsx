//importo el navbar
import { Navbar } from "./components/layout/Navbar"
//importo el itemlistcontainer
import { ItemListContainer } from " ./components/pages/ItemListContainer"


const App = ()=> {
  //antes del return se escribe código js


  //desp del return se escribe código jsx
  return (
   <div> 
    {/* invoco el componente Navbar */}
    <Navbar />
    <ItemListContainer />
   
   </div>
  )
}

export default App
