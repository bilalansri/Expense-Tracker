import './App.css'
import Header from './Component/Links/header';
import Summary from './Component/Links/summary';
import Balance from './Component/Links/balance';
import History from './Component/Links/history';
import Transaction from './Component/Links/transaction';
import { Provider } from 'react-redux';
import store from './Component/Store/store';



function App() {

    return (
    <>
 <Provider store={store}>
    <Header />
    <Balance />
    <Summary />
    <History />
    <Transaction />
    </Provider> 
    </>
    );
}



export default App;
