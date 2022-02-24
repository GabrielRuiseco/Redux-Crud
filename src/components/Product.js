const Product = ({ product }) => {
  return (
    <tr>
      <td>{product.Name}</td>
      <td>{product.Price}</td>
    </tr>
  );
};

export default Product;
