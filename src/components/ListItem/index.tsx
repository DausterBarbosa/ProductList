import React, {useContext} from 'react';

import ProductsContext from '../../context/Products';

import {formatPrice} from '../../utils/currencyFormat';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  ListItemContainer,
  ListItemHeader,
  ListItemBottom,
  ListItemName,
  ListItemPrice,
  ListItemStock,
  ListItemInfoContaier,
  ListItemBottomPanel,
  ListItemBottomTotal,
  ListItemBottomPanelInfo,
  ListItemBottomPanelButton,
  ListItemId,
} from './style';

interface ProductProps {
  product: {
    id: number;
    data: {
      name: string;
      stock: number;
      price: number;
      amount: number;
      subtotal: number;
    };
  };
}

const ListItem: React.FC<ProductProps> = ({product}) => {
  const {addProduct, removeProduct, deleteProduct} =
    useContext(ProductsContext);

  return (
    <ListItemContainer>
      <ListItemHeader>
        <ListItemInfoContaier>
          <ListItemName>{product.data!.name}</ListItemName>
          <ListItemPrice>{formatPrice(product.data.price)}</ListItemPrice>
          <ListItemStock>{product.data!.stock} unidades</ListItemStock>
          <ListItemId>ID: {product.id}</ListItemId>
        </ListItemInfoContaier>
        <ListItemBottomPanelButton
          android_ripple={{color: '##c2a841', borderless: true, radius: 20}}
          onPress={() => deleteProduct(product)}>
          <Icon name="delete" size={30} color="#f8d551" />
        </ListItemBottomPanelButton>
      </ListItemHeader>
      <ListItemBottom>
        <ListItemBottomPanel>
          <ListItemBottomPanelButton
            android_ripple={{color: '##c2a841', borderless: true, radius: 20}}
            onPress={() => addProduct(product)}>
            <Icon name="add-circle-outline" size={30} color="#f8d551" />
          </ListItemBottomPanelButton>
          <ListItemBottomPanelInfo>
            {product.data!.amount}
          </ListItemBottomPanelInfo>
          <ListItemBottomPanelButton
            android_ripple={{color: '##c2a841', borderless: true, radius: 20}}
            onPress={() => removeProduct(product)}>
            <Icon name="remove-circle-outline" size={30} color="#f8d551" />
          </ListItemBottomPanelButton>
        </ListItemBottomPanel>
        <ListItemBottomTotal>
          {formatPrice(product.data!.subtotal)}
        </ListItemBottomTotal>
      </ListItemBottom>
    </ListItemContainer>
  );
};

export default ListItem;
