import ReactDOM from 'react-dom';
import './index.css';
import webFont from 'webfontloader'

import createRoutes from './components/routes'

const routes = createRoutes();

webFont.load({
    google: {
      families: ['Nunito', 'sans-serif']
    }
  });

ReactDOM.render(routes, document.getElementById('root'));
