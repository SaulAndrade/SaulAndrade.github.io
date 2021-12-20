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
    description: '',
    images: [img1, img2],
    about:'',
    crumbs: [c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub],
    onlineAt:'',
    gitHub:''
  },
  {
    id: '2',
    title:'teste1',
    description: '',
    images: [img3, img4],
    about:'',
    crumbs: [c.js, c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub],
    onlineAt:'',
    gitHub:''
  },
  {
    id: '3',
    title:'teste2',
    description: '',
    images: [],
    about:'',
    crumbs: [c.js, c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub],
    onlineAt:'',
    gitHub:''
  },
  {
    id: '4',
    title:'teste3',
    description: '',
    images: [],
    about:'',
    crumbs: [c.js, c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub],
    onlineAt:'',
    gitHub:''
  },
  {
    id: '5',
    title:'teste4',
    description: '',
    images: [],
    about:'',
    crumbs: [c.js, c.mongodb, c.reactjs, c.html5, c.css3, c.git, c.gitHub, c.html5, c.less],
    onlineAt:'',
    gitHub:''
  }
]

export const crumbs = getCrumbs(portfolio)

export default portfolio