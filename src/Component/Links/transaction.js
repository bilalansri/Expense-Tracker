import '../../App.css'
import {useRef, useState} from 'react'
import store from '../Store/store'
import {useForm} from 'react-hook-form'

export default ()=>{
    let [trans, settrans] = useState([])

    const adddata = (datas)=>{
        settrans(datas)
        
        store.dispatch({
            type: 'ADD_DATA',
            payload: datas
        })
    }

    let {register, handleSubmit, formState:{errors}} = useForm()
    return <div>
            <h3>
                ADD NEW TRANSACTION
            </h3>
            <form onSubmit={handleSubmit(adddata)}>
                <div className='form-control'>
                    <label>
                        TEXT
                    </label>
                    <input type='text' placeholder='Enter Text...' {...register('text' , {required:true})}/>
                    {errors.text && <div>Please Enter Some Text</div>}
                </div>
                <div className='form-control'>
                    <label >
                        AMOUNT <br /> (Negative - Expense, Positive - Income)
                    </label>
                    <input type='number' placeholder='Enter Amount...' {...register('amount' , {required:true})}/>
                    {errors.amount && <div>Please Enter Some Amount</div>}
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
    </div>
}