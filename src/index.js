import dva from 'dva';
import './index.css';
import {useRouterHistory} from 'dva/router';
import {createHashHistory} from 'history';
import { browserHistory } from 'dva/router';

// 1. Initialize
// const app = dva({
//     history: useRouterHistory(createHashHistory)({queryKey: false})
//   }
// );
const app = dva({
  history: browserHistory
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

app.model(require("./models/Login/login"));

app.model(require("./models/Products/productDetail"));

app.model(require("./models/Products/products"));

app.model(require("./models/User/address"));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
