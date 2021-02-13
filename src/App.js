import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useSelector, useDispach} from 'react-redux';
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/DashboardPage'


function App() {
  // const Login = useSelector(ShowLogIn);
  // const isCoursesHidden = useSelector(ShowCourses);
 
  return (
    <Router>
      <div className="App">
        <div className="body">
          <Switch>
            <Route path="/" exact component={LogInPage} />
            <Route path="/sign-up" exact component={SignUpPage} />
            <Route path="/sign-in" exact component={LogInPage} />
            {/* <Route path="/reset-password" exact component={CourseForm} /> */}
            <Route path="/dashboard" exact component={DashboardPage}/>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
