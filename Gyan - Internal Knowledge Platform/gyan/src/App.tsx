import { Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from "mobx-react";

import { HOME_PATH } from './common/constants/routePathConstants';
import HomeRoute from './user/Routes/HomeRoute';

import stores from "./stores";

const App = () =>
  
  <Provider {...stores}>
     <Switch>
      <Route exact path={HOME_PATH} component={HomeRoute} />
      
    </Switch>
  </Provider>

export default App