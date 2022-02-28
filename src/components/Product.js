import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../actions/productActions';

const Product = ({ product }) => {
  const { Name, Price, id } = product;

  const dispatch = useDispatch();

  const confirmDeleteProduct = (id) => {
    dispatch(deleteProductAction(id));
  };
  return (
    <tr>
      <td>{Name}</td>
      <td>
        <span className='font-weight-bold'>${Price}</span>
      </td>
      <td className='acciones'>
        <Link to={`/productos/editar/${id}`} className='btn btn-primary mr-2'>
          Editar
        </Link>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => confirmDeleteProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
