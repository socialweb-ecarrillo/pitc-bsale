import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, darkTheme } from '@adobe/react-spectrum';
import { Login } from './components/login';
import { Menu } from './components/menu';
import { PurchaseHistory } from './components/purchase-history';
import { NewUser } from'./components/new-user';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <Provider theme={darkTheme}>
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/purchasehistory">
              <PurchaseHistory />
            </Route>
            <Route path="/newuser">
              <NewUser />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </Provider>
  );
}

export default App;
