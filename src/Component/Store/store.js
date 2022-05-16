import {createStore, combineReducers} from 'redux'

let data={
    transactions:[]
}
const datareducer = (olddata=data, newdata)=>{
    olddata = {transactions : [...olddata.transactions] }
    switch(newdata.type){
        case 'ADD_DATA':
            // return {...olddata, transactions:[...newdata.payload]}
            olddata.transactions.push(newdata.payload)
            break;
        case 'DEL_ROW':
            return {...olddata, transactions:[...newdata.payload]}
            break;
        default:
            break;
    }
    return olddata
}






let combine = combineReducers({datareducer})
let store = createStore(combine)

export default store;