//import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

/*
<TituloPrincipal titulo = {"Hola Comisión"} dia = {"martes"} />
<ItemCount/>


*/