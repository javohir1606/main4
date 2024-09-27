import { Service } from '../service-card/service-card';
import style from './manu.module.css';

export const Main = ({title, text, num}) => {
  return <>
  <div className={style['main_block']}>
    <Service title={num}/>
  <div className="">
    <h3 className={style['text']}>{title}</h3>
    <p className={style['tx']}>{text}</p>

  </div>
  </div>
  </>
}