import {takeEvery, takeLatest, takeLeading, select, call, put, fork, all, race, spawn,} from '@redux-saga/core/effects';

import * as actionTypes from '../constats/index';
import {getLatestNews, getPopularNews} from '../../api';
import {
  setLatestNews,
  setLatestNewsError,
  setLoadingData,
  setPopularNews,
  setPopularNewsError
} from '../actions/actionCreator';

// export function* workerSaga() {
//   // @ts-ignore
//   const data = yield getLatestNews();
//   console.log('data = ', data)
// }

export function* handleLatestNews() {
  try {
    yield put(setLoadingData(true));
    const {hits} = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
    yield put(setLoadingData(false));
  }
  catch{
    yield put(setLatestNewsError('Error in handleLatestNews') );
  }
}

export function* handlePopularNews() {
  try {
    yield put(setLoadingData(true));
    const {hits} = yield call(getPopularNews);
    yield put(setPopularNews(hits));
    yield put(setLoadingData(false));
  }
  catch {
    yield put(setPopularNewsError('Error in handlePopularNews') );
  }
}

// export function* handleNews() {
// yield call(handlePopularNews)
// yield call(handleLatestNews)
// yield all([
//   call(handlePopularNews),
//   call(handleLatestNews)
// ])
//   yield fork(handlePopularNews)
//   yield fork(handleLatestNews)
// }

// export function* watchClickSaga() {
//   yield takeLeading(actionTypes.GET_NEWS, handleNews);
// }

export function* watchClickLatestNewsSaga() {
  yield takeLeading(actionTypes.GET_LATEST_NEWS, handleLatestNews);
}

export function* watchClickPopularNewsSaga() {
  yield takeLeading(actionTypes.GET_POPULAR_NEWS, handlePopularNews);
}

// export default function* rootSaga() {
//   yield watchClickSaga();
// }

export default function* rootSaga() {
  yield all([
    fork(watchClickLatestNewsSaga),
    fork(watchClickPopularNewsSaga)
  ]);
}

// call блокирующий
// fork не блокирующий, результаты приходят отдельно
// all не блокирующий, ждёт возврат всех результатов
//  race не блокирующий, запускат параллельно, отдаёт результат той которая выполнилаь быстрее
//  spawn не блокирующий, не приязан к родителю