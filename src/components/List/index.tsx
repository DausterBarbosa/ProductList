import React, {useContext} from 'react';

import {FlatList} from 'react-native';

import ProductsContext from '../../context/Products';

import ListHeader from '../ListHeader';
import ListItem from '../ListItem';

import {ListContainer} from './style';

function List() {
  const {productList} = useContext(ProductsContext);

  return (
    <ListContainer>
      <ListHeader />
      <FlatList
        data={productList}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ListItem product={item} />}
      />
    </ListContainer>
  );
}

export default List;
