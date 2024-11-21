
export const getProducts = async () => {
  // Mock data, replace with actual API call if needed
  return [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: 29.99,
      image: 'path/to/image1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: 39.99,
      image: 'path/to/image2.jpg',
    },
    // ...more products
  ];
};