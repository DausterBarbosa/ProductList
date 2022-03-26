import AsyncStorage from '@react-native-async-storage/async-storage';

const DATABASE_KEY = 'list_products';

interface NewProductProps {
  name: string;
  stock: string;
  price: string;
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

export const index = async () => {
  const productsDatabase = await AsyncStorage.getItem(DATABASE_KEY);

  if (productsDatabase) {
    const items = JSON.parse(productsDatabase);

    const itemsFiltered = items.filter((item: Product) => item.data !== null);

    return itemsFiltered;
  }

  return [];
};

export const create = async (product: NewProductProps) => {
  const productsDatabase = await AsyncStorage.getItem(DATABASE_KEY);

  if (!productsDatabase) {
    const products = [];

    products.push({
      id: 1,
      data: {...product, amount: 1, subtotal: product.price},
    });

    await AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(products));
  } else {
    const products = JSON.parse(productsDatabase);

    const productNull = products.findIndex(
      (item: Product) => item.data === null,
    );

    if (productNull !== -1) {
      products[productNull].data = {
        ...product,
        amount: 1,
        subtotal: product.price,
      };
    } else {
      products.push({
        id: products[products.length - 1].id + 1,
        data: {...product, amount: 1, subtotal: product.price},
      });
    }

    await AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(products));
  }
};

export const update = async (product: Product) => {
  const productsDatabase = await AsyncStorage.getItem(DATABASE_KEY);

  const items = JSON.parse(productsDatabase!);

  const itemIndex = items.findIndex((item: Product) => item.id === product.id);

  items[itemIndex] = product;

  await AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(items));
};

export const remove = async (product: Product) => {
  const productsDatabase = await AsyncStorage.getItem(DATABASE_KEY);

  const items = JSON.parse(productsDatabase!);

  const itemIndex = items.findIndex((item: Product) => item.id === product.id);

  items[itemIndex].data = null;

  await AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(items));
};
