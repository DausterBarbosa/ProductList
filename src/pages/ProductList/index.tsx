import React from 'react';

import {StatusBar} from 'react-native';

import {ProductApp} from './style';

import SearchBar from '../../components/SearchBar';
import List from '../../components/List';

function ProductList() {
  return (
    <ProductApp>
      <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <SearchBar />
      <List />
    </ProductApp>
  );
}

export default ProductList;
