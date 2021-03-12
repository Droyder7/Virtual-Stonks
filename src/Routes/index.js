import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PrivateRoute from './PrivateRoute';
import Home from '../components/pages/Home';
import Login from '../components/auth/Login';
import Signup from '../components/auth/SignUp';
import Error from '../components/pages/Error';
import privateComponent from '../components/private';

export default function Routes() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '70vh' }}
    >
      <div className="w-100" style={{ maxWidth: '800px' }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={privateComponent} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}
