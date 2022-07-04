import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from './Components/Products';
import Product from './Components/Product';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />}>
          </Route>
          <Route path='/products' element={<Products />}>
          </Route>
          <Route path='/products/:id' element={<Product />} >
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
