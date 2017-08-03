import React, {PropTypes} from 'react';
import TweenOne from 'rc-tween-one';
import {Menu, Icon} from 'antd';
import {connect} from 'dva';
import {Link} from 'react-router';
import * as urlUtil from '../../utils/url';

const Item = Menu.Item;
const SubMenu = Menu.SubMenu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  /**
   * 跳转到登录页面
   */
  handleLogin = () => {
    let pathname = window.location.pathname;
    const params = urlUtil.getQuery();
    let count = 0;
    let spliter = '?';
    for (let i in params) {
      if (count !== 0) {
        spliter = '&';
      }
      pathname += (spliter + i + "=" + params[i]);
      count++;
    }
    window.location.href = '/web/Login?back=' + encodeURIComponent(pathname);
  };

  /**
   *登出按钮
   */
  handleLogout = () => {
    this.props.dispatch({
      type: 'login/logout',
    })

  };

  render() {
    const props = this.props;

    const isMode = props.isMode;
    // delete props.isMode;
    // const navData = {menu1: '/web/Home', menu2: '/web/Products'};
    // const navChildren = Object.keys(navData).map((key, i) => (
    //   <Item key={i} >
    //     <Link style={{color:'#ffffff'}} to={navData[key]}>{navData[key]}</Link>
    //   </Item>
    // ));
    const navChildren = [(<Item className="help" key="home">
      <Link style={{color: '#ffffff'}} to="/web/Home"><Icon type="home"/>Home</Link>
    </Item>), (<Item className="help" key="products">
      <Link style={{color: '#ffffff'}} to="/web/Products"><Icon type="shop"/>Products</Link>
    </Item>), (<Item className="help" key="help">
      <Icon type="question-circle-o"/>
      <span>Help</span>
    </Item>)];

    const userTitle = props.login.user.username ? (
      <SubMenu className="help" key="user" title={props.login.user.username}>
        <Item key="info">
          <Link to="/web/PersonalInfomation">Infomation</Link>
        </Item>
        <Item key="manage">
          <Link to="/web/ProductsManage">Products</Link>
        </Item>
        <Item key="Logout">
          <a onClick={this.handleLogout}>Logout</a>
        </Item>
      </SubMenu>
    ) : (
      <Item key={"Login"}><Link style={{color: '#ffffff'}} onClick={this.handleLogin}>Login</Link></Item>
    );

    navChildren.push(userTitle
      // (<SubMenu className="help" key="user" title={userTitle}>
      //   {props.login.user.name ? <Item key="c">
      //     <a onClick={this.handleLogout}>Logout</a>
      //   </Item> : ''}
      // </SubMenu>)
    );

    return (<TweenOne
      component="header"
      animation={{opacity: 0, type: 'from'}}
      {...this.props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{x: -30, delay: 100, type: 'from', ease: 'easeOutQuad'}}
        id={`${this.props.id}-logo`}
      >
        <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg"/>
      </TweenOne>
      {isMode ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            mode="inline"
            theme="dark"
          >
            {navChildren}
          </Menu>
        </div>
      </div>) :
        <TweenOne
          animation={{x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad'}}
          className={`${this.props.className}-nav`}
        >
          <Menu
            mode="horizontal"
            id={`${this.props.id}-menu`}
          >
            {navChildren}
          </Menu>
        </TweenOne>
      }
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  isMode: PropTypes.bool,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header);
