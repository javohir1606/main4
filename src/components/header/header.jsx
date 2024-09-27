import header from '../../img/header.svg';
import styles from './header.module.css';
import { Service  } from '../../pages/service-card/service-card';

export const Header = () => {
  return <>
  <header className={styles['header']}>
  <div className={styles['container']}>
    <div className={styles['header_block']}>
    <div>
    <img src={header} alt="img" />
    </div>

  <div className={styles['header_item']}>
    <a className={styles['header_link']} href="#">Pricing</a>
    <a className={styles['header_link']} href="#">Product</a>
    <a className={styles['header_link']} href="#">About Us</a>
    <a className={styles['header_link']} href="#">Careers</a>
    <a className={styles['header_link']} href="#">Community</a>
  </div>

  <div>
        <Service />
  </div>

    </div>
  </div>

  </header>
  </>
}