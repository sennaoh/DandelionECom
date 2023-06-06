import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';
import {MenuTopNav} from './MenuDropdown';
import {CartSVG} from '../public/images/CartSVG.js';

const Header = () => {
 return (
    <nav className={styles.navbar}>
       <Link href="/">
          <a>
             <div className={styles.logo}>
                <h1>
                   dandelion <span className={styles.logo_span}></span>
                </h1>
             </div>
          </a>
       </Link>
       <MenuTopNav/>
       <div className="nav-price snipcart-checkout">
    <span>
      <CartSVG/>

</span>
    <p className="snipcart-total-price">$0.00</p>
 </div>

    </nav>
 );
};

export default Header;