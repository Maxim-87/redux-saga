import * as actionType from '../constats/index'

export const increaseCount = () => ({
  type: actionType.INCREASE_COUNT,
})

export const decreaseCount = () => ({
  type: actionType.DECREASE_COUNT,
})

export const getLatestNews = () => ({
  type: actionType.GET_LATEST_NEWS,
})

export const setLatestNews = (payload: any) => ({
  type: actionType.SET_LATEST_NEWS,
  payload,
})

export const setLatestNewsError = (payload: any) => ({
  type: actionType.SET_LATEST_NEWS_ERROR,
  payload,
})

export const getPopularNews = () => ({
  type: actionType.GET_POPULAR_NEWS,
})

export const setPopularNews = (payload: any) => ({
  type: actionType.SET_POPULAR_NEWS,
  payload,
})

export const setPopularNewsError = (payload: any) => ({
  type: actionType.SET_POPULAR_NEWS_ERROR,
  payload,
})


export const setLoadingData = (payload: any) => ({
  type: actionType.SET_LOADING_DATA,
  payload,
})
