import React from 'react';

import {Products} from './context/Products';

import ProductList from './pages/ProductList';

function App() {
  return (
    <Products>
      <ProductList />
    </Products>
  );
}

export default App;
