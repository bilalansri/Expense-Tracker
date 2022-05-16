import '../../App.css'
import {useSelector} from 'react-redux'

export default ()=>{

    let storedata = useSelector(abc=>abc.datareducer.transactions) || []

    let amounts = storedata.map(datas=>datas.amount)

    let ifilter = amounts.filter(datas=>datas > 0)

    let efilter = amounts.filter(datas=>datas < 0)

    let income = ifilter.reduce((a, b)=>a += +b, 0)

    let expense = efilter.reduce((a, b)=>a += +b, 0)

    return <div className='inc-exp-container'>

        <div>
            <h4>
                INCOME
            </h4>
            
            <p className="money plus">
                $ {income}
            </p>            
        </div>

        <div>
            <h4>
                EXPENSE
            </h4>
            
            <p className="money minus">
                $ {expense}
            </p>            
        </div>
    </div>
}