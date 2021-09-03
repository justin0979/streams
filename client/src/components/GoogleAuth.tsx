import { useState, useEffect } from 'react';

const GoogleAuth: React.FC = () => {
  const [auth, setAuth] = useState<any>();

  useEffect(() => {
    window.gapi.load('client.auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '42657505038-nbv58rj93heokrj5539l6ljm7kofc9dd.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
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
