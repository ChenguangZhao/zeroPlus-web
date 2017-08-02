import React from 'react';
import './UserTip.css';
import {Popover} from 'antd';
import {connect} from 'dva';
import moment from "moment";

const dateFormat = 'YYYY-MM-DD';

function UserTip(props) {

  const {children, user} = props;

  return (
    <Popover trigger="click" content={
      <UserTipContent user={user}/>
    }>
      {children}
    </Popover>
  );
}

function UserTipContent(props) {
  const {user} = props;
  return (
    <div>
      <p style={{textAlign:'center'}}>
        <img style={{width: 150, height: 150}} src={"/innerApi/portrait/" + user.userId}/>
      </p>
      <hr />
      <span className={"userInfo"}>
        Name : {user.username}
        <br />
        Join Time : {moment(user.joinTime).format(dateFormat)}
      </span>
    </div>
  );
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(UserTip);
