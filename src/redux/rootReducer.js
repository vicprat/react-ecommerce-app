import { combineReducers } from 'redux'

import { userReducer } from './user/userReducer'
import { categoriesReducer } from './categories/categoriesReducer'
// import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
  // cart: cartReducer,
})
