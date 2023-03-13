import expresso from '../../../../assets/coffe/expresso.svg'
import americano from '../../../../assets/coffe/americano.svg'
import expressoCremoso from '../../../../assets/coffe/expressoCremoso.svg'
import expressGelado from '../../../../assets/coffe/cafeGelado.svg'
import cafeComLeite from '../../../../assets/coffe/cafeComLeite.svg'
import latte from '../../../../assets/coffe/latte.svg'
import capuccino from '../../../../assets/coffe/capuccino.svg'
import macchiato from '../../../../assets/coffe/macchiato.svg'
import mocaccino from '../../../../assets/coffe/mocaccino.svg'
import chocolateQuente from '../../../../assets/coffe/chocolateQuente.svg'
import cubano from '../../../../assets/coffe/cubano.svg'
import havaiano from '../../../../assets/coffe/havaiano.svg'
import arabe from '../../../../assets/coffe/arabe.svg'
import irlandes from '../../../../assets/coffe/irlandes.svg'

export const coffes = [
  {
    tags: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9.90',
    thumbnail: expresso,
  },
  {
    tags: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9.90',
    thumbnail: americano,
  },
  {
    tags: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9.90',
    thumbnail: expressoCremoso,
  },
  {
    tags: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9.90',
    thumbnail: expressGelado,
  },
  {
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9.90',
    thumbnail: cafeComLeite,
  },
  {
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9.90',
    thumbnail: latte,
  },
  {
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9.90',
    thumbnail: capuccino,
  },
  {
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9.90',
    thumbnail: macchiato,
  },
  {
    tags: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9.90',
    thumbnail: mocaccino,
  },
  {
    tags: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9.90',
    thumbnail: chocolateQuente,
  },
  {
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9.90',
    thumbnail: cubano,
  },
  {
    tags: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9.90',
    thumbnail: havaiano,
  },
  {
    tags: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9.90',
    thumbnail: arabe,
  },
  {
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Irlandês',
    description: 'Bebida preparada com café, whisky e chantilly',
    price: '9.90',
    thumbnail: irlandes,
  },
]
