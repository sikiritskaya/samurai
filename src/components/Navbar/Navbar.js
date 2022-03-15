import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'
import style from './Navbar.module.css'
function Navbar(props) {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to="/profile" className = { navData => navData.isActive ? style.active : style.item } >Profile</NavLink>
            </div>
            <div>
                <NavLink to="/messages" className = { navData => navData.isActive ? style.active : style.item }>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className = { navData => navData.isActive ? style.active : style.item }>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className = { navData => navData.isActive ? style.active : style.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className = { navData => navData.isActive ? style.active : style.item }>Settings</NavLink>
            </div>
            <div>
            <NavLink to="/users" className = { navData => navData.isActive ? style.active : style.item }>Users</NavLink>
            </div>
            <div>
                <Friends friends = {props.data.friends} />
            </div>
        </nav>
    )
}
export default Navbar