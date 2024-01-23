import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'U Tracker',
    desc: 'An application to track all your data from one place. I developed the website and the mobile app.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc: 'An app to help people get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc: 'Using this app, you can track any coin. Also, you will get good advice about investment from the professional.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc: 'A portfolio for Cavin Jr., an artist from New York City. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc: 'A tracking website that will show the performance of the website. Also, you will get some useful advice to improve performance.',
    img: ProjectImg,
  },
];

export default projects;
