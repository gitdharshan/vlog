import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/components/pages/Users';
import NewPages from './places/components/pages/NewPlaces';
import UpdatePlaces from './places/components/pages/UpdatePlaces';
import UserPlaces from './places/components/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation'; 

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places" exact>
            {/* Add a route for `/places` */}
            <UserPlaces />
          </Route>
          <Route path="/:userId/places">
            <UserPlaces />
          </Route>
          <Route path="/places/new">
            <NewPages />
          </Route>
          <Route path="/places/:placeId">
           <UpdatePlaces />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
