import React from 'react';
import {Router, Route} from 'dva/router';

import MainLayout from './components/MainLayout/MainLayout'
import IndexPage from './routes/Home';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import Products from './routes/Products/Products';
import ProductDetail from './routes/Products/Detail';
import PersonalInfomation from './routes/Personal/PersonalInfomation';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={MainLayout}>
        <Route path="/web/Register" component={Register}/>
        <Route path="/web/Login" component={Login}/>
        <Route path="/web/Products" component={Products}/>
        <Route path="/web/ProductDetail" component={ProductDetail}/>
        <Route path="/web/PersonalInfomation" component={PersonalInfomation}/>
      </Route>
      <Route path="/web/Home" component={IndexPage}/>
      <Route path="/web/" component={IndexPage}/>
    </Router>

  );
}

export default RouterConfig;
