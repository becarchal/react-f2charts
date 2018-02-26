import dva from 'dva';
// import createLogger from 'redux-logger';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import { message } from 'antd';
// import 'babel-polyfill';
import './index.css';
import * as config from './utils/configuration';
import * as models from './models';

// 1. Initialize
const app = config.isDev()
  ? dva({
      history: createHistory()
      // onAction: createLogger(),
    })
  : dva({
      history: createHistory(),
      onError(e) {
        message.error(e.message, /* duration */ 2);
      }
    });
// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
Object.keys(models).forEach(key => app.model(models[key]));
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
