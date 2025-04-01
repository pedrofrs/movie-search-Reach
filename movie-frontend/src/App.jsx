import Home from "./pages/Home.jsx";
import './App.css'
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Favorites from "./pages/Favorites.jsx";

function App() {
  return (
      <div>
        <NavBar></NavBar>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </main>
      </div>
  );
}

export default App
