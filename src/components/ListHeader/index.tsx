import React, {useState, useContext} from 'react';

import ProductsContext from '../../context/Products';

import {
  ListHeaderContainer,
  ListHeaderContainerLabel,
  ListHeaderContainerItem,
  ListHeaderItemContainer,
} from './style';

function ListHeader() {
  const {idSort, nameSort, priceSort, stockSort} = useContext(ProductsContext);

  const [id, setId] = useState(true);
  const [nome, setNome] = useState(false);
  const [preco, setPreco] = useState(false);
  const [estoque, setEstoque] = useState(false);

  function handleSelect(item: number) {
    setId(item === 0 ? true : false);
    setNome(item === 1 ? true : false);
    setPreco(item === 2 ? true : false);
    setEstoque(item === 3 ? true : false);

    switch (item) {
      case 0:
        idSort();
        break;
      case 1:
        nameSort();
        break;
      case 2:
        priceSort();
        break;
      case 3:
        stockSort();
        break;
    }
  }

  return (
    <ListHeaderContainer>
      <ListHeaderContainerLabel>Ordenar por:</ListHeaderContainerLabel>
      <ListHeaderItemContainer>
        <ListHeaderContainerItem selected={id} onPress={() => handleSelect(0)}>
          ID
        </ListHeaderContainerItem>
        <ListHeaderContainerItem
          selected={nome}
          onPress={() => handleSelect(1)}>
          Nome
        </ListHeaderContainerItem>
        <ListHeaderContainerItem
          selected={preco}
          onPress={() => handleSelect(2)}>
          Preço
        </ListHeaderContainerItem>
        <ListHeaderContainerItem
          selected={estoque}
          onPress={() => handleSelect(3)}>
          Estoque
        </ListHeaderContainerItem>
      </ListHeaderItemContainer>
    </ListHeaderContainer>
  );
}

export default ListHeader;
