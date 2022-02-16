import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/productos/nuevo' element={<NewProduct />} />
          <Route path='/productos/editar/:id' element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
