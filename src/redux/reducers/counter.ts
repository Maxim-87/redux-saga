import { combineReducers } from "redux";
import * as actionType from '../constats/constants';

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

const counterReducer = (state: CounterState = initialState, action: any) => {
  switch (action.type) {
    case actionType.INCREASE_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case actionType.DECREASE_COUNT: {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    default: {
      return state;
    }
  }
}

export default counterReducer;