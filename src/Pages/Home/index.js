import { Product } from '../../Class/Product';

function Home() {
  const product1 = new Product('Sản phẩm 1', 100000, 'Mô tả sản phẩm 1');

  return (
    <div>
      <h2>Home Page</h2>
      <p>{product1.getName()}</p>
    </div>
  );
}

export default Home;
