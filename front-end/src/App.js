import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Earnings from './components/Earnings/Earnings';
import Expense from './components/Expense/Expense';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Analytics from './components/Analytics/Analytics';
import CurrencyExchange from './components/CurrencyExchange/CurrencyExchange';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path='/earnings' element={<Earnings state={props.appState} />} />
            <Route exact path='/expense' element={<Expense state={props.appState} />} />
            <Route exact path='/calculator' element={<Calculator state={props.appState} />} />
            <Route exact path='/analytics' element={<Analytics state={props.appState} />} />
            <Route exact path='/currencyExchange' element={<CurrencyExchange state={props.appState} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
