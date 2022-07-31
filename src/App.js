import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components';
import { Home, NotFound, PlayerPage, TeamPage } from './pages';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import TeamDetails from './components/TeamDetails/TeamDetails';
// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {
//         teams: {
//           merge(existing, incoming) {
//             return incoming;
//           },
//         },
//         players: {
//           merge(existing, incoming) {
//             return incoming;
//           },
//         },
//       },
//     },
//   },
// });
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
        <ApolloProvider client={client}>
            <Router>
              <NavBar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/players" element={<PlayerPage/>}/>
                <Route path="/teams" element={<TeamPage/>}/>
                <Route path='/teamDetails/:id' element={<TeamDetails/>}/>
                <Route path="*" element={<NotFound/>}/>
              </Routes>
            </Router>
        </ApolloProvider>
    </>
  );
}

export default App;
