import * as actionTypes from './actionTypes';

export const setProduct = (products) =>{
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
      type: actionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };

