import * as actionType from '../constats/constants';

export type ErrorsType = {
  newsError: string,
  popularNewsError: string,
}

const initialState: ErrorsType = {
  newsError: '',
  popularNewsError: '',
}

const errorsReducer = (state: ErrorsType = initialState, action: any) => {
  switch (action.type) {
    case actionType.SET_LATEST_NEWS_ERROR: {
      const { payload } = action;
      return {
        ...state,
        newsError: payload,
      }
    }

    case actionType.SET_POPULAR_NEWS_ERROR: {
      const { payload } = action;
      console.log('SET_POPULAR_NEWS_ERROR', payload)
      return {
        ...state,
        popularNewsError: payload,
      }
    }

    default: return state;
  }
}

export default errorsReducer;