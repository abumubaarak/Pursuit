import Signup from "./component/Signup";
import Login from "./component/Login";
import Logo from "./component/Logo"
import { connect  } from "react-redux";

import { Route, Switch,Redirect } from "react-router-dom";
import Authentication from "./component/Authentication";
import Dashboard from "./component/Dashboard";

function App({user}) {
  console.log(user);
  return (
  <div>
   
    <Switch>
    <Route path="/signup" component={Signup}/>
    <Route path="/home" component={Dashboard}/>
      <Route path="/login" />
      <Route path="/" render={()=> user.currentUser ?( <Redirect to="/home"/>) :(<Authentication/> ) }/>

    </Switch>
   
  </div>
  );
}
const mapStateToProps=({userAuth})=>({
  user:userAuth
})

export default connect(mapStateToProps,null)(App);
