const products = [
  {
    id: 'a2f44a9b-286b-4ca6-9586-69b2b31bb37d',
    name: 'Hamburguer',
    price: 35.50,
    img: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'd05eebd2-d594-4535-bdd6-032f26f2282b',
    name: 'Pizza',
    price: 35.50,
    img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subproduct: [
      {
        title: 'Bordas',
        options: [
          {
            name: 'Borda de Catupiry',
            price: 5.50
          },
          {
            name: 'Borda de Cheedar',
            price: 4.50
          }
        ]
      },
      {
        title: 'Sabores',
        options: [
          {
            name: 'Muçarela',
            price: 37.50
          },
          {
            name: 'Calabresa',
            price: 33.50
          }
        ]
      }
    ]
  }
]
const description = ' Restaurante comandado pelo chef Paolo Lavezzini. A cozinha é caprichadíssima e moderna, mescla a tradição italiana com excelentes produtos brasileiros. Boa pedida tanto para um almoço executivo como para um jantar a dois.'
const restaurants = [
  {
    id: 'ede5ad12-5047-4390-962c-9b1577fcd93e',
    title: 'Restaurante 1',
    category: ['Hamburguers', 'Pizzas'],
    description: description,
    img: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    products: products,
    rating: 4
  },
  {
    id: '09f24d24-c77c-4681-91bf-01cfd2b8db04',
    title: 'Restaurante 2',
    category: ['Hamburguers', 'Pizzas'],
    description: description,
    img: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    products: products,
    rating: 3
  },
  {
    id: '14943ba5-133a-4d45-8ae2-bcc63610f825',
    title: 'Restaurante 3',
    category: ['Hamburguers', 'Pizzas'],
    description: description,
    img: 'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    products: products,
    rating: 2
  },
  {
    id: '214902cc-373a-493a-b16c-12abb3f57910',
    title: 'Restaurante 4',
    category: ['Hamburguers', 'Pizzas'],
    description: description,
    img: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    products: products,
    rating: 5
  }
]

export default {
  restaurants
}
