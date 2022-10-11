import * as actionType from '../constats/constants';

export type NewsType = {
  news: Array<any>,
  popularNews: Array<any>,
}

const initialState: NewsType = {
  news: [],
  popularNews: [],
}

const newsReducer = (state: NewsType = initialState, action: any) => {
  switch (action.type) {
    case actionType.SET_LATEST_NEWS: {
      const { payload } = action;
      return {
        ...state,
        news: payload,
      }
    }

    case actionType.SET_POPULAR_NEWS: {
      const { payload } = action;
      console.log('SET_POPULAR_NEWS', payload)
      return {
        ...state,
        popularNews: payload,
      }
    }

    default: return state;
  }
}

export default newsReducer;