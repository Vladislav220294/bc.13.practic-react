import { Component } from 'react';
import TransactionForm from "./components/TransactionForm/TransactionForm";
import MainPage from './components/MainPage/MainPage';
import TransactionListPage from './components/TransactionListPage/TransactionListPage'
class App extends Component {
  state = {
    activePage : 'main',
  }
  
  changePage = (activePage) => this.setState({activePage,})

  render() {
    return(
      <div>
        {this.state.activePage === 'main' && <MainPage changePage={this.changePage }/>}
        {this.state.activePage === 'incomes' && <TransactionListPage changePage={this.changePage} transType={'incomes' }/>}
        {this.state.activePage === 'costs' && <TransactionListPage changePage={this.changePage} transType={'costs' }/>}

      
    </div>
  );
  }
}

export default App;
