import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';
import brandLogo from '../public/JDlogo.png';
export default function Navibar() {
  return (
    <div>
      <Image src={brandLogo} alt='Developer logo'  layout="fixed" width={190} height={190} />
    </div>
  );
}
