import { useState, useEffect } from 'react';

interface GoogleAuthProps {
  className: string;
}

const GoogleAuth: React.FC<GoogleAuthProps> = (props) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    // Load the library
    window.gapi.load('client.auth2', () => {
      // Initialize the library
      window.gapi.client
        .init({
          clientId:
            '42657505038-nbv58rj93heokrj5539l6ljm7kofc9dd.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
        });
    });
  }, []);

  return <div className={`${props.className}`}>GoogleAuth</div>;
};

export default GoogleAuth;
