import {Route, Switch} from 'react-router-dom'
import { HOME_PATH } from './common/constants/routePathConstants';
import Home from "./user/Components/Home";
import HomeRoute from './user/Routes/HomeRoute';

const App = () =>  <Switch>
  <Route exact path={HOME_PATH} component={HomeRoute} />
</Switch>

export default App