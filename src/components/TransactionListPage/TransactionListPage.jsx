import TransactionList from "../transactionsList/TransactionsList";

const TransactionListPage = ({ changePage, transType }) => {
    return ( <button onClick={() => {changePage("main")}} type="button">Goback</button> );
}
 
export default TransactionListPage;