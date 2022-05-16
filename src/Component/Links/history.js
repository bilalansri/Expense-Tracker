import '../../App.css'
import store from '../Store/store'
import {useSelector} from 'react-redux'

export default ()=>{


    let storedata = useSelector(abc=>abc.datareducer.transactions) || []
    
    const delrow = (evt, indx)=>{
        storedata.splice(indx,1)

        store.dispatch({
            type: 'DEL_ROW',
            payload: storedata
        })
    }

    return <div>

    <h3>HISTORY</h3>
    <ul className="list">
        {
            storedata.map((ab, indx)=>{
                const sign = ab.amount < 0 ? '-' : '+';
                return <li className={ab.amount < 0 ? 'minus' : 'plus'}>
                    {ab.text} <span>
                    {sign}$ {ab.amount}
                    </span>
                    <button onClick={(evt)=>delrow(evt, indx)} className='delete-btn'>
                        X
                    </button>
                </li>
            })
        }
    </ul>
    </div>
}