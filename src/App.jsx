//importo el navbar

//importo el itemlistcontainer
import { Navbar } from "./components/layout/navbar/Navbar";
//itemlist presentacional
import ItemListContainer from "./components/pages/itemlist/ItemList";

const App = () => {
  //antes del return se escribe código js

  //desp del return se escribe código jsx
  return (
    <div>
      {/* invoco el componente Navbar */}
      <Navbar />
      <ItemListContainer />
    </div>
  );
};

export default App;
