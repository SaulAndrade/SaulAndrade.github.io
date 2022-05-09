import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'

const c = {
  reactjs:'ReactJS',
  js:'Javascript',
  git:'Git',
  gitHub:'GitHub',
  uxuides:'UX/UI Design',
  uxuiarq:'UX/UI Architecture',
  uxuidan:'UX/UI Animation',
  node:'NodeJS',
  webpk:'Webpack',
  reactntv:'React Native',
  py:'Python',
  html5:'HTML5',
  css3:'CSS3',
  saas:'SAAS',
  less:'LESS',
  antd:'Ant Design',
  mongodb: 'MongoDB',
  mongore: 'Mongo Realm',
  aws: 'AWS',
  awslamb: 'AWS Lambda',
  graphql: 'GraphQl',
  frontend: 'Front-End',
  backend: 'Back-End',
  gamedesign:'Game Design'
}

const getCrumbs = (portfolio) => {
  const flatPortfolio = portfolio.reduce((prev, cur)=>{
    if (!(prev.crumbs)){
      return [...cur.crumbs]
    }
    return [...prev.crumbs, ...cur.crumbs]
  }, [])
  const uniqueCrumbs = [...new Set(flatPortfolio)].sort()
  return uniqueCrumbs
}

const portfolio = [
  {
    id: '1',
    title:'teste',
    description: 'a totally awesome web app',
    images: [img1, img2],
    about:'Ea enim aute nostrud Lorem deserunt anim enim commodo minim laboris qui occaecat. Ea est anim ex elit voluptate exercitation. Eu aliqua eu ex in labore voluptate aliquip do dolor dolor esse. Dolore irure dolor officia laboris occaecat tempor incididunt minim anim fugiat qui laboris.',
    crumbs: [c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub],
    onlineAt:'',
    gitHub:'https://github.com/SaulAndrade/SaulAndrade.github.io'
  },
  {
    id: '2',
    title:'teste1',
    description: '',
    images: [img3, img4],
    about:'Ut cupidatat nisi id tempor deserunt veniam aliqua pariatur incididunt consequat. Ex nulla tempor duis pariatur culpa anim laboris ut. Proident deserunt in in esse id reprehenderit consequat laborum irure eu irure nostrud fugiat aute. Quis ad anim sunt exercitation incididunt. Ut reprehenderit tempor eu mollit Lorem ex.',
    crumbs: [c.js, c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub],
    onlineAt:'',
    gitHub:'https://github.com/SaulAndrade/SaulAndrade.github.io'
  },
  {
    id: '3',
    title:'teste2',
    description: '',
    images: [img1, img3],
    about:'Incididunt minim incididunt officia ad laborum. Occaecat sit elit mollit laborum minim esse duis eu. Laboris nulla ea amet id.',
    crumbs: [c.js, c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub],
    onlineAt:'',
    gitHub:'https://github.com/SaulAndrade/SaulAndrade.github.io'
  },
  {
    id: '4',
    title:'teste3',
    description: '',
    images: [img2, img4],
    about:'Excepteur aliquip enim mollit cupidatat sunt Lorem culpa ea et laboris ea et sint. Eiusmod cillum mollit amet reprehenderit nulla quis proident quis laboris commodo aliquip mollit cupidatat. Reprehenderit id eu irure adipisicing deserunt mollit cupidatat minim.',
    crumbs: [c.js, c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub],
    onlineAt:'',
    gitHub:'https://github.com/SaulAndrade/SaulAndrade.github.io'
  },
  {
    id: '5',
    title:'teste4',
    description: 'Fugiat dolore quis fugiat minim velit occaecat cupidatat occaecat duis adipisicing non aliquip cillum. Culpa enim sit consectetur aliqua. Do proident aliquip voluptate incididunt exercitation mollit esse officia anim est adipisicing reprehenderit. Culpa minim ex in ex laboris deserunt tempor incididunt reprehenderit. Aliquip consequat irure minim ullamco aliqua cillum. Est veniam in consequat veniam id eu sunt. Fugiat esse nostrud nisi adipisicing.',
    images: [img1, img4],
    about:'',
    crumbs: [c.js, c.mongodb, c.reactjs, c.css3, c.git, c.gitHub, c.less],
    onlineAt:'',
    gitHub:'https://github.com/SaulAndrade/SaulAndrade.github.io'
  }
]

export const crumbs = getCrumbs(portfolio)

export default portfolio