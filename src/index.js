import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../src/redux/configureStore';
// import App from './App';

console.log(store.getState());

function App() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </>
        </ConnectedRouter>
      </Provider>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  