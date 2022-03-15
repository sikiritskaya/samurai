import Navbar from "./Navbar";
import {connect} from 'react-redux'
const mapStateToProps =(state)=>{
    return {
        data: state.sidebar
    }
}
const NavbarComponent = connect(mapStateToProps)(Navbar)
export default NavbarComponent