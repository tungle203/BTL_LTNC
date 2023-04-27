import { BeverageList } from '../../Class/Product';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>
        {BeverageList[0].getGoods().map((item, index) => (
          <p key={index}>{item.getQuantity()}</p>
        ))}
      </p>
    </div>
  );
}

export default Home;
