import React, { useEffect } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from './Pages/Home';
import Status from './Pages/Status';

import { BeverageList, FoodList } from './ProductClass';
function App() {
  useEffect(() => {
    BeverageList.forEach((product) => {
      product.setGoods(JSON.parse(localStorage.getItem(`${product.getName()}`)));
    });
    FoodList.forEach((product) => {
      product.setGoods(JSON.parse(localStorage.getItem(`${product.getName()}`)));
    });
  }, []);
  return (
    <HashRouter>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Home BeverageList={BeverageList} FoodList={FoodList} />} />
            <Route path="/status" element={<Status BeverageList={BeverageList} FoodList={FoodList} />} />
          </Routes>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
