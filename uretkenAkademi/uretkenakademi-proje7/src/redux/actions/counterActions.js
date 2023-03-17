import * as actionTypes from './actionTypes';

export const Increase_Counter=()=>
{
    return {
        type:actionTypes.INCREASE_COUNTER,
        payload:1
    }
}

export const Decrease_Counter=()=>{
    return {
        type:actionTypes.DECREASE_COUNTER,
        payload:1
    }
}

export const Increase_By_Two_Counter=()=>{
    return {
        type:actionTypes.INCREASE_BY_TWO_COUNTER,
        payload:2
    }
}