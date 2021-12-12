import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from './pages/User';
import Admin from './pages/Admin';
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import Dice from './components/Dice';

// Adding Imports 
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
  <ApolloProvider client={client}>

    <Router>
      <div>


        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ RegisterPage } />
          <Route path="/home" component={ HomePage } />
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={User} />
          <Route exact path="/dmdashboard" component={Admin} />
          <Route exact path="/dice" component={Dice} />
        </Switch>

      </div>
    </Router>

  </ApolloProvider>
  );
}

export default App;
