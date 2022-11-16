import logo from './logo.svg';
import './App.css';
import {ApolloClient , InMemoryCache , ApolloProvider} from '@apollo/client'
import Displaydata from './Displaydata';
import DisplaySubscribedata from './DisplaySubscribedata';

function App() {
  const client = new ApolloClient(
    {
      cache: new InMemoryCache(),
      uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'
    }
  )
  return (
    // <ApolloProvider client={client}>
    //   <div className="App">
    //     <h1>
    //       Uniswap GraphQL
    //     </h1>
    //     <Displaydata/>
    //   </div>
    // </ApolloProvider>
    <div className="App">
    <h1>
      Uniswap GraphQL
    </h1>
   <DisplaySubscribedata/>
  </div>
  );
}

export default App;
