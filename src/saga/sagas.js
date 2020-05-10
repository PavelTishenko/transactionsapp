import { takeEvery, put, call } from 'redux-saga/effects';
import { LOADED, dataLOADED, LOAD_DATA } from '../redux/actions';

 function fetchData() {    
       return  fetch('data.csv')
            .then(res => res.text());      
}

function* workerLoadData() {
   try{ 
    const dataText = yield call(fetchData);
    const data = dataText.split('\n').slice(1);
    yield put(dataLOADED(data));
   } catch(e) {
       console.log(e);
   } 
}

// watcher
export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}