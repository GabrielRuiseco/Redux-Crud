import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className='container mt-5'>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/productos/nuevo' element={<NewProduct />} />
            <Route path='/productos/editar/:id' element={<EditProduct />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
