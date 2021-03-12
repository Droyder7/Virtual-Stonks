import { useAuth } from '../../../../../contexts/AuthContext';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

export default function RightNavLinks() {
  const { currentUser } = useAuth();
  return <>{currentUser ? <SignedInLinks /> : <SignedOutLinks />}</>;
}
