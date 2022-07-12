import { Fragment,useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/User";

import { signOutUser } from "../../utils/firebase/Firebase";
import './navigation.scss';

const Navigation = () => {
    const { crurrentUser } = useContext(UserContext);

    // const signOutHandler = async() => {
    //     await signOutUser();
    //     setCurrentUser(null); //清空context user資料
    // };
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        crurrentUser ? ( 
                        <span className="nav-link" onClick={signOutUser}>
                            SIGN OUT
                        </span> ) : ( 
                        <Link className="nav-link" to='/auth'>
                            SIGN IN
                        </Link> 
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigation