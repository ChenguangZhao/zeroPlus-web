import React from 'react';
import styles from './UserTip.css';
import {Popover} from 'antd';
import {connect} from 'dva'
function UserTip(props) {

  const {children,user} = props;
  return (
    <Popover title={user.username} trigger="click" content={"loading……"}>
      {children}
    </Popover>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserTip);
