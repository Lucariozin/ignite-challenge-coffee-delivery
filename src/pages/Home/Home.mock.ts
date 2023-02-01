interface Coffee {
  id: string
  name: string
  description: string
  labels: string[]
  price: number
  image: string
}

export const coffeeList: Coffee[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    labels: ['Tradicional'],
    price: 9.9,
    image: '/img/coffees/traditional-espresso.svg',
  },
  {
    id: '2',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    labels: ['Tradicional'],
    price: 9.9,
    image: '/img/coffees/creamy-expresso.svg',
  },
  {
    id: '3',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    labels: ['Tradicional', 'Gelado'],
    price: 9.9,
    image: '/img/coffees/iced-espresso.svg',
  },
  {
    id: '4',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    labels: ['Tradicional', 'Com leite'],
    price: 9.9,
    image: '/img/coffees/coffee-with-milk.svg',
  },
  {
    id: '5',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    labels: ['Tradicional', 'Com leite'],
    price: 9.9,
    image: '/img/coffees/latte.svg',
  },
  {
    id: '6',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    labels: ['Tradicional', 'Com leite'],
    price: 9.9,
    image: '/img/coffees/cappuccino.svg',
  },
  {
    id: '7',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    labels: ['Tradicional', 'Com leite'],
    price: 9.9,
    image: '/img/coffees/macchiato.svg',
  },
  {
    id: '8',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    labels: ['Tradicional', 'Com leite'],
    price: 9.9,
    image: '/img/coffees/mocha.svg',
  },
  {
    id: '9',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    labels: ['Especial', 'Com leite'],
    price: 9.9,
    image: '/img/coffees/hot-chocolate.svg',
  },
  {
    id: '10',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    labels: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
    image: '/img/coffees/cuban.svg',
  },
  {
    id: '11',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    labels: ['Especial'],
    price: 9.9,
    image: '/img/coffees/hawaiian.svg',
  },
  {
    id: '12',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    labels: ['Especial'],
    price: 9.9,
    image: '/img/coffees/arabic.svg',
  },
  {
    id: '13',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    labels: ['Especial', 'Alcoólico'],
    price: 9.9,
    image: '/img/coffees/irish.svg',
  },
]
