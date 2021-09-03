import {useState, useEffect} from 'react';

const GoogleAuth: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  useEffect(() => {
    window.gapi.load('client.auth2', () => {
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

  return (
    <div>
      <h1>Google Auth</h1>
    </div>
  );
};

export default GoogleAuth;
