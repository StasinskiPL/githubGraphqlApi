import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/main.scss";
import {ApolloProvider,InMemoryCache,ApolloClient} from "@apollo/client";

const client = new ApolloClient({
  uri:"https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers:{
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  }
  
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


