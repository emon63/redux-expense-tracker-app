import Layout from './components/Layout';
import Balance from './components/Balance';
import Form from './components/Form';
import Transactions from './components/transactions/Transactions';

function App() {
  return (
    <div className="App">
      <Layout>
        <Balance></Balance>
        <Form></Form>
        <Transactions></Transactions>
      </Layout>
    </div>
  );
}

export default App;
