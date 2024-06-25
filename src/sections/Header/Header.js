import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/logo.png'
import Navitem, {NavitemDropDown} from '../../components/Navitem/Navitem'
const Header=(props)=>{
    return(<>
    <div className="navbar navbar-expand-md navbar-dark cyprog-navbar">
        <div className="container">
            <a href="/" className="navbar-brand">
                <img src={logo} alt='' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <Navitem>
                        <Link to='/' className="nav-link">Home</Link>
                        </Navitem>
                    <Navitem><a href="#features" className="nav-link">Browse</a></Navitem>
                   <NavitemDropDown>
                        <a href="kuyfy" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                        </ul>
                   </NavitemDropDown>
                    <Navitem><a href="#faq" className="nav-link">Streams</a></Navitem>
                    <Navitem>
                        <Link to='/profile' className="nav-link">Profile</Link>
                        
                        </Navitem>
                </ul>
            </div>
        </div>
    </div>
    </>)
}
export default Header