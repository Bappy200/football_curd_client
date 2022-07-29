import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components';
import { Home } from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {

  const client = ApolloClient({
    uri:"http://localhost:5000",
    caches: new InMemoryCache(),
  })

  return (
    <>
      <ApolloProvider client={client}>
          <NavBar/>
          <Home/>
      </ApolloProvider>
    </>
  );
}

export default App;
