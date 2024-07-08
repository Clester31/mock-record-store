import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { allItems } from "./AlbumData";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/onsale' element={<Store shopCategory={allItems} banner={'On Sale'} />} />
          <Route path='/new' element={<Store shopCategory={allItems} banner={'New Arrivals'} />} />
          <Route path='/classics' element={<Store shopCategory={allItems} banner={'Classics'} />} />
          <Route path='/popular' element={<Store shopCategory={allItems} banner={'Popular'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
