import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/productActions';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = () => dispatch(getProductsAction());
    loadProducts();
  }, []);

  const products = useSelector((state) => state.products.products);

  return (
    <Fragment>
      <h2 className='text-center my-5'>Listado de productos</h2>
      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.lenght === 0
            ? 'no hay productos'
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
