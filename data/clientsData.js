import { v4 as uuidv4 } from 'uuid';
import NetsolLogo from '../public/images/company/Netsol.png';
import CodeNinjaLogo from '../public/images/company/codeninjainc.jpeg';

export const clientsHeading = 'Some of the companies I worked with';

export const clientsData = [
  {
    id: uuidv4(),
    title: 'Netsol Technologies',
    img: NetsolLogo,
  },
  {
    id: uuidv4(),
    title: 'CodeNinja',
    img: CodeNinjaLogo,
  },
];
