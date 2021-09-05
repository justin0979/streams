import { useState, useEffect } from 'react';

interface GoogleAuthProps {
  className: string;
}

const GoogleAuth: React.FC<GoogleAuthProps> = (props) => {
  let auth: gapi.auth2.GoogleAuth;
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
          auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = () => {
    setIsSignedIn(auth.isSignedIn.get());
  };

  const renderAuthButton = (): JSX.Element => {
    if (isSignedIn === null) {
      return <div>I don&apos;t know if you are signed in</div>;
    } else if (isSignedIn) {
      return <div>I Am Signed In!</div>;
    } else {
      return <div>I am not signed in</div>;
    }
  };

  return (
    <div className={`${props.className}`}>
      {renderAuthButton()}
    </div>
  );
};

export default GoogleAuth;
