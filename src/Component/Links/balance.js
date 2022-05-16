import '../../App.css'
import {useSelector} from 'react-redux'

export default ()=>{

    let storedata = useSelector(abc=>abc.datareducer.transactions) || []

    let amounts = storedata.map(datas=>datas.amount)

    let total = amounts.reduce((a, b)=> a+=+b, 0)

    return <div>

            <h4>
                YOUR BALANCE
            </h4>
            
            <h1>
                $ {total}
            </h1>
    </div>
}