import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { connect  } from "react-redux";
 
import { Route, Switch,Redirect } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
 
function App({user}) {
 
  return (
  <div>
     <Switch>
     <Route path="/signup" render={ ()=> user.currentUser ? 
        (<Redirect to="/home"/>) : 
        (<Signup/>)}/>
        
    <Route path="/home" component={Dashboard}/>
      <Route path="/login"  render={ ()=> user.currentUser ? 
        (<Redirect to="/home"/>) : 
        (<Login/>)}/>
      <Route path="/" render={ ()=> user.currentUser ? 
        (<Redirect to="/home"/>) : 
        (<Authentication/>)}/>

    </Switch>
   
  </div>
  );
}
const mapStateToProps=({userAuth})=>({
  user:userAuth
})

export default connect(mapStateToProps,null)(App);
