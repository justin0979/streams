import { useState, useEffect } from 'react';

interface GoogleAuthProps {
  className?: string;
}

const GoogleAuth: React.FC<GoogleAuthProps> = (props) => {
  const [auth, setAuth] = useState<gapi.auth2.GoogleAuth>();
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(
    null,
  );

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
          const _auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(_auth.isSignedIn.get());
          _auth.isSignedIn.listen(() => onAuthChange(_auth));
          setAuth(_auth);
        });
    });
  }, []);

  const onAuthChange = (_auth: gapi.auth2.GoogleAuth) => {
    setIsSignedIn(_auth.isSignedIn.get());
  };

  const onSignIn = (): void => {
    auth && auth.signIn();
  };

  const onSignOut = (): void => {
    auth && auth.signOut();
  };

  const renderAuthButton = (): JSX.Element | null => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button
          onClick={onSignOut}
          className="btn btn--google btn--red"
        >
          <span className="icon--google">G</span> Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={onSignIn}
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
