import ReactDOM from 'react-dom';
import App from '&components/App';
import '&sass/main.scss';

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
