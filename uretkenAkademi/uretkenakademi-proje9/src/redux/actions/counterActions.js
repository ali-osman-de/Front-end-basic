import * as actionTypes from "./actionTypes";

export const IncreaseCounter = () => {
  return {
    type: actionTypes.INCREASE_COUNTER,
    payload: 1,
  };
};

export const DecreaseCounter = () => {
  return {
    type: actionTypes.DECREASE_COUNTER,
    payload: 1,
  };
};

export const IncreaseCounterByTwo = () => {
  return {
    type: actionTypes.INCREASE_COUNTER_BY_TWO,
    payload: 2,
  };
};

export const DecreaseCounterByTwo = () => {
  return {
    type: actionTypes.DECREASE_COUNTER_BY_TWO,
    payload: 2,
  };
};
