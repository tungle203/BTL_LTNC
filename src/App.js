import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from './Pages/Home';
import Status from './Pages/Status';
import Add from './Pages/Add';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
