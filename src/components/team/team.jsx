import { Service } from '../../pages/service-card/service-card';
import style from './team.module.css';
export const Team = () =>{
  return <>
  <div className={style['team_block']}>
     <div className={style['container']}>
      <div className={style['row']}>
        <h1 className={style['text']}>Simplify how your team works today.</h1>
        <Service btnColor={'white'} color={'#F3603C'}/>

      </div>
     </div>
  </div>
  </>
}