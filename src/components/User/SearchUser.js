import React from 'react';
import './SearchUser.css';
import {Select} from 'antd';
import * as userService from "../../services/UserService";

const Option = Select.Option;

class SearchUser extends React.Component {
  state = {};

  handleSearch = (key) => {
    const self = this;
    if (key) {
      let params = {
        key: key
      };

      let userPromise = userService.searchUser(params);
      userPromise.then(function (result) {
        console.log(key);
        let datas = [];
        if (result.data) {
          result.data.map((item) => {
            item.key = item.userId;
            datas.push(item);
          })
        }
        console.log(datas);

        self.setState({datas: datas})
      });
    }
  };

  handleOnChange=(value)=>{
    this.props.onChange(value);
  };

  render() {

    let _ary = this.state.datas ? this.state.datas.map(function (v, k) {

      return (<Option key={v.userId} value={v.userId}>
        <span>
           <img src={'/innerApi/portrait/'+v.userId} className={'portrait'}/>
          {v.username}
          </span>
      </Option>);
    }) : [];
    console.log(_ary);

    return (
      <Select multiple={false} showSearch={true}
              style={{width: '50%'}}
              onSearch={this.handleSearch}
              onChange={this.handleOnChange}
              filterOption={false}
      >
        {_ary}
      </Select>
    );
  }
}

export default SearchUser;
