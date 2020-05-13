import { takeEvery, put, call } from 'redux-saga/effects';
import { dataLOADED, LOAD_DATA } from '../redux/actions';

// get data from local file
 function fetchData() {    
       return  fetch('data.csv')
    //    get response and change it to text
            .then(res => res.text())
                 
}

// worker
function* workerLoadData() {
   try{ 
    // call function fetchData and stop saga until promise is done   
    const dataText = yield call(fetchData);

    
    // make data "great again" as arr 
    const data = dataText.split('\n').slice(1);
    const products = [];
    // Create arr with obj to render it in react-table
    data.forEach(el => {
        const dataArr = el.split(',');
        products.push({
            TransactionId: dataArr[0],
            Status: dataArr[1],
            Type: dataArr[2],
            Clientname: dataArr[3],
            Amount: dataArr[4]
        })
    })   
    // call action and put data to redux state
    yield put(dataLOADED(products))
   } catch(e) {
       console.log(e);
   } 
}

// watcher
export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}