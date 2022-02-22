import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProductAction } from '../actions/productActions';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const addProduct = (product) => dispatch(createNewProductAction(product));

  const submitNewProduct = (e) => {
    e.preventDefault();
    if (name.trim() === '' || price <= 0) {
      return;
    }
    addProduct({
      name,
      price,
    });
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Agregar Nuevo producto
            </h2>
            <form className='form-group' onSubmit={submitNewProduct}>
              <label>Nombre del producto</label>
              <input
                id='name'
                type='text'
                className='form-control'
                placeholder='Nombre del producto'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Precio del producto</label>
              <input
                id='price'
                type='number'
                className='form-control'
                placeholder='Precio del producto'
                name='price'
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4'
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
