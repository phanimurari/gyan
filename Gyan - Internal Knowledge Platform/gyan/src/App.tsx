import { Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from "mobx-react";

import { HOME_PATH, NOT_FOUND_PATH } from './common/constants/routePathConstants';
import HomeRoute from './user/Routes/HomeRoute';

import stores from "./stores";
import { NotFound } from './user/Routes/NotFound/NotFound';

const App = () =>
  
  <Provider {...stores}>
     <Switch>
      <Route exact path={HOME_PATH} component={HomeRoute} />
      <Route path={NOT_FOUND_PATH} component={NotFound} />
      <Redirect to={NOT_FOUND_PATH} />
    </Switch>
  </Provider>

export default App