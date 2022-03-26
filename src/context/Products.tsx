import React, {createContext, useEffect, useState} from 'react';

import {index, update, remove, create} from '../services/Database';

interface ProductsContextProps {
  addProduct(item: Product): void;
  removeProduct(item: Product): void;
  deleteProduct(item: Product): void;
  createProduct(item: NewProductProps): void;
  idSort(): void;
  nameSort(): void;
  priceSort(): void;
  stockSort(): void;
  searchProduct(input: string): void;
  productList: Product[];
}

interface Product {
  id: number;
  data: {
    name: string;
    stock: number;
    price: number;
    amount: number;
    subtotal: number;
  };
}

interface NewProductProps {
  name: string;
  stock: string;
  price: string;
}

const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps,
);

export const Products: React.FC = ({children}) => {
  const [productList, setProductList] = useState<Product[]>([]);

  const [order, setOrder] = useState<number>();

  async function createProduct(item: NewProductProps) {
    await create(item);

    const products = await index();

    setProductList(products);
  }

  async function addProduct(item: Product) {
    const product = productList.findIndex(itemList => item.id === itemList.id);

    if (
      productList[product].data.amount + 1 <=
      productList[product].data.stock
    ) {
      productList[product].data.amount += 1;
      productList[product].data.subtotal =
        productList[product].data.amount * productList[product].data!.price;

      setProductList([...productList]);

      await update(item);
    }
  }

  async function removeProduct(item: Product) {
    const product = productList.findIndex(itemList => item.id === itemList.id);

    if (productList[product].data.amount - 1 !== 0) {
      productList[product].data.amount -= 1;
      productList[product].data.subtotal =
        productList[product].data.amount * productList[product].data!.price;

      setProductList([...productList]);

      await update(item);
    } else {
      productList.splice(product, 1);

      setProductList([...productList]);

      await remove(item);
    }
  }

  async function deleteProduct(item: Product) {
    const product = productList.findIndex(itemList => item.id === itemList.id);

    productList.splice(product, 1);

    setProductList([...productList]);

    await remove(item);
  }

  async function searchProduct(input: string) {
    const products = await index();

    if (input !== '') {
      const findProducts = products.filter((item: Product) =>
        item.data.name.toLowerCase().includes(input.toLowerCase()),
      );

      setProductList(findProducts);
    } else {
      setProductList(products);

      switch (order) {
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

      setProductList([...productList]);
    }
  }

  async function idSort() {
    productList.sort(function (a, b) {
      return a.id - b.id;
    });

    setProductList([...productList]);

    setOrder(0);
  }

  function nameSort() {
    productList.sort(function (a, b) {
      if (a.data?.name > b.data?.name) {
        return 1;
      }

      if (a.data?.name < b.data?.name) {
        return -1;
      }

      return 0;
    });

    setProductList([...productList]);

    setOrder(1);
  }

  function priceSort() {
    productList.sort(function (a, b) {
      return a.data?.price - b.data?.price;
    });

    setProductList([...productList]);

    setOrder(2);
  }

  function stockSort() {
    productList.sort(function (a, b) {
      return a.data?.stock! - b.data?.stock;
    });

    setProductList([...productList]);

    setOrder(3);
  }

  useEffect(() => {
    async function getProducts() {
      const products = await index();

      setProductList(products);
    }

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        addProduct,
        removeProduct,
        deleteProduct,
        createProduct,
        idSort,
        nameSort,
        stockSort,
        priceSort,
        searchProduct,
        productList,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
