import { Link, useNavigate } from "react-router-dom";
import '../styles/css/header.css';
import logo from "../assets/img/argentBankLogo.png"
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedOut } from "../services/redux/loginSlice";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.login.connected);
    const firstName = useSelector(state => state.profile.firstName);

    const logout = () => {
        dispatch(getLoggedOut());
        navigate('/');
    };

    return (
        <nav className="main-nav">
            <Link to={"/"} className="main-nav-logo"><img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
            />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {
                isLogged ? (
                    <div className="nav">
                        <Link to={"/profile"} className="main-nav-link profile-button"><i className="fa fa-user-circle"></i>{firstName}</Link>
                        <Link to={"/"} onClick={logout} className="main-nav-link"><i className="fa fa-sign-out"></i>Sign Out</Link>
                    </div>
                ) : (
                    <div>
                        <Link to={"/login"} className="main-nav-link"><i className="fa fa-user-circle"></i>Sign In</Link>
                    </div>
                )
            }

        </nav>
    );
}

export default Header;