import { useState, useEffect, useRef } from 'react';
import { useActions } from '&hooks';

interface GoogleAuthProps {
  className?: string;
}

const GoogleAuth: React.FC<GoogleAuthProps> = (props) => {
  const auth = useRef<gapi.auth2.GoogleAuth>();
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(
    null,
  );
  const { signIn, signOut } = useActions();

  useEffect(() => {
    // Load the library
    window.gapi.load('client:auth2', () => {
      // Initialize the library
      window.gapi.client
        .init({
          clientId:
            '42657505038-nbv58rj93heokrj5539l6ljm7kofc9dd.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen((e) => onAuthChange(e));
        });
    });
  }, []);

  const onAuthChange = (isSignedIn: boolean): void => {
    if (isSignedIn) {
      signIn();
    } else {
      signOut();
    }
  };

  const onSignInClick = (): void => {
    auth.current?.signIn();
  };

  const onSignOutClick = (): void => {
    auth.current && auth.current.signOut();
  };

  const renderAuthButton = (): JSX.Element | null => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button
          onClick={onSignOutClick}
          className="btn btn--google btn--red"
        >
          <span className="icon--google">G</span> Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={onSignInClick}
          className="btn btn--red btn--google"
        >
          <span className="icon--google">G</span> Sign In with
          Google
        </button>
      );
    }
  };

  return (
    <div className={`${props.className}`}>
      {renderAuthButton()}
    </div>
  );
};

export default GoogleAuth;
