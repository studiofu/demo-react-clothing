import {CartActionTypes} from './cart.types';

// no need payload
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

