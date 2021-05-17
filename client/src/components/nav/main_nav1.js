import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from '../../reduxStore/actions/authAction';

const MainNav1 = (props) => {

    const {
        auth,
        logoutDispatch

    } = props;
    const socialMedia = [
        'facebook',
        'twitter',
        'instagram'
    ]


    const logout = () => {
        logoutDispatch();
    }
    return (
        <div className='nav1'>
            <ul>
                <p>follow us on:</p>
                {socialMedia.map(social => (
                    <li><i className={ `fa fa-${social}`}></i></li>
                ))}
                
            </ul>
            <ul>
                <Link to='/sell-UShop'><li>Sell on UShop</li></Link>
                <li>Categories</li>

                {auth.isAuth ? (
                    <li onClick={logout}>log out</li>

                ) : (
                    <Link to='/auth'><li className='account_nav'>log-in | sign-up</li></Link>

                )}
            </ul>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutDispatch : () => dispatch(logoutAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
                    (MainNav1)
