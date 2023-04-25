import { Product } from '../../Class/Product';

function ProductMenu() {
  const product1 = new Product('Sản phẩm 1', 100000);
  const product2 = new Product('Sản phẩm 2', 100000);
  const product3 = new Product('Sản phẩm 3', 100000);
  const product4 = new Product('Sản phẩm 4', 100000);
  const productList = [product1, product2, product3, product4];
  return (
    <ul>
      {productList.map((product, index) => (
        <li key={index}>{product.getName()}</li>
      ))}
    </ul>
  );
}

export default ProductMenu;
