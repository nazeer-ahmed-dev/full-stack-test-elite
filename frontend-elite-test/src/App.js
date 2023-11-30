import React from 'react';
import ProductList from './components/ProductList';
import StarredProductList from './components/starredProductLIst';

const App = () => {
  return (
    <>
      <ProductList/>
      <StarredProductList/>
    </>
  );
};

export default App;
