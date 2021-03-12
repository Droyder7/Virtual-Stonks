import Nav from 'react-bootstrap/Nav';
import { useAuth } from '../../../../../contexts/AuthContext';

export default function SignedInLinks() {
  const { logout } = useAuth();
  return (
    <Nav>
      <Nav.Link href="addstock">Add Stocks</Nav.Link>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
  );
}
