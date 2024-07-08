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
          <Route path='mock-record-store/' element={<Home />} />
          <Route path='mock-record-store/cart' element={<Cart />} />
          <Route path='mock-record-store/onsale' element={<Store shopCategory={allItems} banner={'On Sale'} />} />
          <Route path='mock-record-store/new' element={<Store shopCategory={allItems} banner={'New Arrivals'} />} />
          <Route path='mock-record-store/classics' element={<Store shopCategory={allItems} banner={'Classics'} />} />
          <Route path='mock-record-store/popular' element={<Store shopCategory={allItems} banner={'Popular'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
