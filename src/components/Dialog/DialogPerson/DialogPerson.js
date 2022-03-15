import { NavLink } from 'react-router-dom'
import style from './DialogPerson.module.css'

function DialogPerson(props) {
    let link = '/messages/'
    return (
        <div className={style.dialog_person}>
            <img src="https://images.chesscomfiles.com/uploads/v1/user/41646238.ccf33e27.1200x1200o.d18425d9a348.jpeg"></img>
            <NavLink to={link + props.id} className = { navData => navData.isActive ? style.active : style.item }>{props.name}</NavLink>
        </div>
    )
}

export default DialogPerson
