import style from './service.module.css'

export const Service = ({title = 'Get Started', btnColor, color}) => {
  return <>
  <button style={{background: btnColor, color: color}} className={style['btn']}>{title}</button>
  </>
}