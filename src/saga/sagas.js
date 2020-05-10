import { takeEvery, put, call } from 'redux-saga/effects';
import { LOADED, dataLOADED, LOAD_DATA } from '../redux/actions';

// get data from local file
 function fetchData() {    
       return  fetch('data.csv')
    //    get response and change it to text
            .then(res => res.text());      
}

// worker
function* workerLoadData() {
   try{ 
    // call function fetchData and stop saga until promise is done   
    const dataText = yield call(fetchData);
    // make data "great again" as arr 
    const data = dataText.split('\n').slice(1);
    // call action and put data to redux state
    yield put(dataLOADED(data));
   } catch(e) {
       console.log(e);
   } 
}

// watcher
export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}