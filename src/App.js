import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import UserList from './components/Pages/userList';
import AddUser from './components/Pages/addUser';
import EditUser from './components/Pages/editUser';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UserList}/>
            <Route exact path="/users/add" component={AddUser}/>
            <Route exact path="/users/edit/:email" component={EditUser}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
