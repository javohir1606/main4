import style from './cantact_card.module.css';

export const Contact = ({img, title, text}) => {
  return <>
  <div className={style['cantact']}>
       <img className={style['img']} src={img} alt="img" />
       <h1 className={style['text']}>{title}</h1>
       <p className={style['tx']}>{text}</p>
  </div>
  </>
}