import React, {useState, useContext} from 'react';

import ProductsContext from '../../context/Products';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  SearchBarContainer,
  SearchBarInput,
  BarContainer,
  BarButton,
  HeaderBar,
  BottomBar,
  BottomBarLabel,
  BottomBarInput,
  BottomBarInputRow,
  BottomBarInputRowItem,
  BottomBarButton,
  BottomBarButtonLabel,
  LabelFormError,
  LabelSavedProduct,
} from './style';

function SearchBar() {
  const {createProduct, searchProduct} = useContext(ProductsContext);

  const [openBottomBar, setOpenBottomBar] = useState(false);

  const [name, setName] = useState<string>('');
  const [stock, setStock] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const [fieldEmpty, setFieldEmpty] = useState(false);
  const [stockZero, setStockZero] = useState(false);

  const [savedProduct, setSavedProduct] = useState(false);

  async function handleCreateProduct() {
    if (name === '' || stock === '' || price === '') {
      setSavedProduct(false);
      setStockZero(false);
      setFieldEmpty(true);
    } else if (Number.parseInt(stock, 10) < 1) {
      setFieldEmpty(false);
      setStockZero(true);
    } else {
      createProduct({
        name,
        stock,
        price,
      });

      setName('');
      setStock('');
      setPrice('');

      setFieldEmpty(false);
      setStockZero(false);
      setSavedProduct(true);
    }
  }

  function resetSearchBar() {
    setName('');
    setStock('');
    setPrice('');
    setFieldEmpty(false);
    setStockZero(false);
    setSavedProduct(false);
  }

  return (
    <BarContainer>
      <HeaderBar>
        <SearchBarContainer>
          <Icon name="search" size={25} color="#999" />
          <SearchBarInput
            placeholder="Procurar Produto"
            onChangeText={e => searchProduct(e)}
          />
        </SearchBarContainer>
        <BarButton
          android_ripple={{color: '##c2a841', borderless: true, radius: 30}}
          onPress={() => {
            resetSearchBar();
            setOpenBottomBar(!openBottomBar);
          }}>
          {openBottomBar ? (
            <Icon name="remove" size={30} color="#FFF" />
          ) : (
            <Icon name="add" size={30} color="#FFF" />
          )}
        </BarButton>
      </HeaderBar>
      {openBottomBar && (
        <BottomBar>
          <BottomBarLabel>Adicionar Produto</BottomBarLabel>
          {fieldEmpty && (
            <LabelFormError>
              Todos os campos devem ser preenchidos
            </LabelFormError>
          )}
          {stockZero && (
            <LabelFormError>
              O estoque tem que ter uma quantidade válida
            </LabelFormError>
          )}
          {savedProduct && (
            <LabelSavedProduct>Produto criado com sucesso</LabelSavedProduct>
          )}
          <BottomBarInput
            placeholder="Nome"
            value={name}
            onChangeText={e => setName(e)}
            onFocus={() => {
              setSavedProduct(false);
            }}
          />
          <BottomBarInputRow>
            <BottomBarInputRowItem>
              <BottomBarInput
                placeholder="Qnt. em estoque"
                keyboardType="number-pad"
                value={stock}
                onChangeText={e => setStock(e)}
                onFocus={() => {
                  setSavedProduct(false);
                }}
              />
            </BottomBarInputRowItem>
            <BottomBarInputRowItem>
              <BottomBarInput
                placeholder="Preço"
                keyboardType="number-pad"
                value={price}
                onChangeText={e => setPrice(e)}
                onFocus={() => {
                  setSavedProduct(false);
                }}
              />
            </BottomBarInputRowItem>
          </BottomBarInputRow>
          <BottomBarButton
            android_ripple={{color: '##c2a841'}}
            onPress={handleCreateProduct}>
            <BottomBarButtonLabel>ADICIONAR PRODUTO</BottomBarButtonLabel>
          </BottomBarButton>
        </BottomBar>
      )}
    </BarContainer>
  );
}

export default SearchBar;
