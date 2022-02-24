import clientAxios from '../config/axios';
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../types';
import Swal from 'sweetalert2';

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      await clientAxios.post('/', product);
      dispatch(addProductSuccess(product));
      Swal.fire('Agregado', 'El producto se agrego correctamente', 'success');
    } catch (error) {
      console.log(error);
      dispatch(addProductError(true));
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intente de nuevo',
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (status) => ({
  type: ADD_PRODUCT_ERROR,
  payload: status,
});

export function getProductsAction() {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const response = await clientAxios.get('/getAll');
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getProductsError(error));
    }
  };
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});
