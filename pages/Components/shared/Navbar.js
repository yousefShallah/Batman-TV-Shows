import Link from 'next/link';
import { useRouter } from 'next/router'


const linkStyle = {
  marginRight: 15
};

const Navbar = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Navbar;