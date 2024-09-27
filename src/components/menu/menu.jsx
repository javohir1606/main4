import style from './menu.module.css';
import { Main } from '../../pages/menu.card/menu.card';
export const Menu = () => {
  return <>
  <section className={style['menu']}>
    <div className={style['container']}>
      <div className={style['menu_block']}>
        <div className="">
          <h2 className={style['menu_tx']}>What’s different about Manage?</h2>
          <p className={style['menu_text']}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
        </div>
        <div className="">
          <Main num={'01'} title={'Track company-wide progress'} text={'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'}/>
          <Main num={'02'} title={'Track company-wide progress'} text={'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'}/>
          <Main num={'03'} title={'Track company-wide progress'} text={'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'}/>
          
        </div>
      </div>
    </div>
  </section>
  </>
}