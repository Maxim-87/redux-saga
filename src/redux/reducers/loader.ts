import * as actionType from '../constats/constants';

export type LoadingType = {
  isLoading: boolean,
}

const initialState: LoadingType = {
  isLoading: false,
};

const loaderReducer = (state: LoadingType = initialState, action: any) => {
  switch (action.type) {
  case actionType.SET_LOADING_DATA: {
    const { payload } = action;
    console.log('SET_LOADING_DATA = ', payload);
    return {
      ...state,
      isLoading: payload,
    };
  }

  default: return state;
  }
};

export default loaderReducer;