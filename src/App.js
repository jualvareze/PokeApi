import { useState } from "react";
import Contexto from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./views/home";
import Pokemon from "./components/Pokemon";
import Pokemones from "./views/pokemones";
function App() {
  const [pokemones, setPokemones] = useState([1,2])
  const estadocompartido = { pokemones, setPokemones }
  return (
    <>
      <div className="App">
        <Contexto.Provider value={estadocompartido}>
          <BrowserRouter>
          <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Pokemones" element={<Pokemones />}></Route>
              <Route path="/Pokemon/:name" element={<Pokemon />}></Route>
            </Routes>
          </BrowserRouter>
        </Contexto.Provider>
      </div>
    </>
  );
}

export default App;
