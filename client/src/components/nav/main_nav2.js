import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCartAction } from '../../reduxStore/actions/cartAction';

const MainNav2 = ({cart, setCartDispatch}) => {

    const openNav1 = () => {
        document.querySelector('.nav1').classList.add('openNav1');
    }

    useEffect(() => {
        setCartDispatch()
    }, []);
    return (
        <div className='nav2'>
            <i className='menu-icon' onClick={openNav1}>☰</i>
            <Link to='/'><h1>UShop</h1></Link>
            <form>
                <label>
                    <input type='search' />
                    <i className='fa fa-search'></i>
                </label>
            </form>
            <Link to='/cart' className='cartIcon'>
                <i class="fa fa-shopping-cart"></i>
                <p>{cart.length > 0 ? cart.length : null}</p>
            </Link>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCartDispatch : () => dispatch(setCartAction())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav2)
