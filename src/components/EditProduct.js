const EditProduct = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Editar producto
            </h2>
            <form className='form-group'>
              <label for='name'>Nombre del producto</label>
              <input
                id='name'
                type='text'
                className='form-control'
                placeholder='Nombre del producto'
                name='name'
              />
              <label for='price'>Precio del producto</label>
              <input
                id='price'
                type='number'
                className='form-control'
                placeholder='Precio del producto'
                name='price'
              />
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4'
              >
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct