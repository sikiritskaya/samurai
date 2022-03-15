import preloader from '../../assets/images/spiner.svg'
import style from './preloader.module.css'
function Preloader(){
    return <div className={style.preloader}>
        <img src={preloader}></img>
    </div>
}
export default Preloader