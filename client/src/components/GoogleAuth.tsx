import { useEffect } from 'react';

const GoogleAuth: React.FC = () => {
  useEffect(() => {
    window.gapi.load('client.auth2', () => {
      window.gapi.client.init({
        clientId:
          '42657505038-nbv58rj93heokrj5539l6ljm7kofc9dd.apps.googleusercontent.com',
        scope: 'email',
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
