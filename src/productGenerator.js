import "./App.css"

const categories = ['туфли', 'джинсы', 'байки', 'худи', 'кофты', 'кеды'];
const descriptions = {
  туфли: 'выполнены из натуральной кожи',
  джинсы: 'выполнены из натурального хлопка',
  байки: 'выполнена из натурального хлопка',
  худи: 'выполнено из натурального хлопка',
  кофты: 'выполнена из натурального хлопка',
  кеды: 'выполнены из натуральной кожи',
};

export const generateRandomProducts = (count) => {
  const products = [];

  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpeg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.png',

    // Add the remaining image URLs here
  ];

  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const description = descriptions[category];
    const color = getRandomColor();
    const price = getRandomPrice();
    const rating = getRandomRating();
    const name = generateProductName(category); // Генерация названия товара на основе категории
    const image = images[Math.floor(Math.random() * images.length)];

    const product = {
      id: i,
      name: name,
      description: description,
      color: color,
      category: category,
      price: price,
      rating: rating,
      imageUrl: image,
    };

    products.push(product);
  }

  return products;
};

const generateProductName = (category) => {
  switch (category) {
    case 'туфли':
      return 'Туфли';
    case 'джинсы':
      return 'Джинсы';
    case 'байки':
      return 'Байка';
    case 'худи':
      return 'Худи';
    case 'кофты':
      return 'Кофта';
    case 'кеды':
      return 'Кеды';
    default:
      return 'Товар';
  }
};

const getRandomColor = () => {
  const colors = ['красный', 'синий', 'зеленый', 'черный', 'белый'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomPrice = () => {
  return Math.floor(Math.random() * (9999 - 10 + 1) + 10);
};

const getRandomRating = () => {
  return (Math.random() * (5.0 - 0.0) + 0.0).toFixed(1);
};