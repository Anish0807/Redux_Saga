import { all, delay, put, take, takeEvery, takeLatest } from 'redux-saga/effects'

function* incrementCount() {
    yield delay(2000);
    yield put({ type: 'INCREMENT_COUNT' })
}

function* decrementCount() {
    yield put({ type: 'DECREMENT_COUNT' })
}

export function* firstSaga() {
    yield all([takeEvery('INCREMENT', incrementCount), takeLatest('DECREMENT', decrementCount)])
}