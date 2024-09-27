import hero from '../../img/hero.svg';
import { Service } from '../../pages/service-card/service-card';
import style from './hero.module.css';
export const Hero = () => {
  return <>
  <section>
    <div className={style['container']}>
      <div className={style['hero_block']}>
        <div className="">
          <h1 className={style['hero_text']}>Bring everyone together to build better products.</h1>
          <p className={style['hero_tx']}>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
          <Service />
        </div>
        <div className="">
          <img src={hero} alt="img" />
        </div>
      </div>
    </div>
  </section>
  </>
}