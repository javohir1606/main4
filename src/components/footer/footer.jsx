import style from './footer.module.css';
import footer from '../../img/footer.svg';
import img1 from '../../img/img1.svg';
import img2 from '../../img/img2.svg'
import img3 from '../../img/img3.svg'
import img4 from '../../img/img4.svg'
import img5 from '../../img/img5.svg'
import { Service } from '../../pages/service-card/service-card';
export const Footer = () => {
  return <>
  <footer className={style['footer']}>
  <div className={style['container']}>
    <div className={style['footer_block']}>
        <ul className={style['footer_pic']}>
          <li>
            <div>
            <img src={footer} alt="img" />
            </div>
            <div className={style['footer_item']}>
              <a href="#">
                <img src={img1} alt="img" />
              </a>
              <a href="#">
                <img src={img2} alt="img" />
              </a>
              <a href="#">
                <img src={img3} alt="img" />
              </a>
              <a href="#">
                <img src={img4} alt="img" />
              </a>
              <a href="#">
                <img src={img5} alt="img" />
              </a>
            </div>
          </li>
          <li className={style['footer_items']}>
            <a className={style['footer_link']} href="#">Home</a>
            <a className={style['footer_link']} href="#">Pricing</a>
            <a className={style['footer_link']} href="#">Products</a>
            <a className={style['footer_link']} href="#">About Us</a>
          </li>
          <li className={style['footer_items']}>
            <a className={style['footer_link']} href="#">Careers</a>
            <a className={style['footer_link']} href="#">Community</a>
            <a className={style['footer_link']} href="#">Privacy Policy</a>
          </li>
          <li>
            <div className={style['footer_row']}>
              <input className={style['footer_input']} type="text" placeholder='Updates in your inbox…'/>
              < Service title={'Go'}/>
            </div>
            <p className={style['footer_text']}>Copyright 2020. All Rights Reserved</p>
          </li>
        </ul>
     </div>
  </div>
  </footer>
  </>
}