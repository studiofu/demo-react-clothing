import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {ReactComponent as Logo} from '../../assests/crown.svg';

import {connect} from 'react-redux';

import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-containers' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}>
                        SIGN OUT
                    </div> : 
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
                
            </div>
            {
                hidden ? null : <CartDropdown />
            }
            
        </div>
    )
}

// the params state is actually the root Reducer
// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser
// })

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
