import Home from "./Home";
import Movies from "./Movies";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import People from "./People";
import Locations from "./Locations";

export const BASE_URL = 'https://resource-ghibli-api.onrender.com';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/people" element={<People/>}/>
        <Route path="/locations" element={<Locations/>}/>
      </Routes>
    </div>
  );
}

export default App;
