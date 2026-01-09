import styles from './Home.module.css';
import {Link} from 'react-router-dom';


export default function Home() {

   return (
      <div className={styles.home}>
         <header className={styles.home__header}>
            <h1>Welcome To Homepage</h1>
            <nav>
               <ul className={styles.home__header__nav}>
                  <li className={styles.home__header__nav__li}><Link to='/sign-in' >Sign In</Link></li>
                  <li className={styles.home__header__nav__li}><Link to='/sign-up'>Sign Up</Link></li>
               </ul>
            </nav>
         </header>
      </div>
   );
}