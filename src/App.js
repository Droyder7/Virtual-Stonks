// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/layouts/NavBar';
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes />
    </AuthProvider>
  );
}

export default App;
