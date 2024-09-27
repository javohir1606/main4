import style from './cantact.module.css'
import img1 from '../../img/img.svg'
import { Contact } from '../../pages/contact-card/contact_card'
import { Service } from '../../pages/service-card/service-card'
export const Media = () => {
  return <>
  <div className={style['cantact_block']}>
    <h1 className={style['cantact_text']}>What they’ve said</h1>
    <div className={style['row']}>

    <div className={style['block']}>
    <Contact img={img1} title={'Anisha Li'} text={'  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'}/>
    </div>
    <div className={style['block']}>
    <Contact img={img1} title={'Anisha Li'} text={'  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'}/>
    </div>
    </div>
    <div className={style['pic']}>

  <Service />
    </div>
  </div>
  </>
}