import React from 'react';
import './Address.css';
import {Table, Popconfirm, Button, Icon, Tag} from 'antd'
import AddressModal from './AddressModal';
import {connect} from 'dva'


function Address(props) {


  /**
   * 删除
   * @param record
   */
  function handleDeleteAddress(record) {
    const {dispatch} = props;
    dispatch({
      type: 'address/deleteAddress',
      payload: {
        id: record.id
      }
    })
  }

  /**
   * 设为默认地址
   * @param record
   */
  function handleSettingDefault(record) {
    const {dispatch} = props;
    dispatch({
      type: 'address/settingDefaultAddress',
      payload: {
        id: record.id
      }
    })
  }

  const {list, loading} = props.address;

  const columns = [{
    title: 'Default',
    dataIndex: 'isDefault',
    key: 'isDefault',
    width: '8%',
    render: (text, record, index) => {
      if (text === 1) {
        return <Tag color="#3CB371">Default</Tag>
      }
    }
  }, {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    width: '10%'
  }, {
    title: 'Full name',
    dataIndex: 'fullName',
    key: 'fullName',
    width: '10%'
  }, {
    title: 'Street address',
    dataIndex: 'streetAddress',
    key: 'streetAddress',
    width: '15%'
  }, {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    width: '10%'
  }, {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    width: '5%'
  }, {
    title: 'Zip code',
    dataIndex: 'zipCode',
    key: 'zipCode',
    width: '10%'
  }, {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
    width: '10%'
  }, {
    title: 'Opertion',
    dataIndex: 'opertion',
    key: 'opertion',
    width: '15%',
    render: (text, record, index) => {
      return (
        <div >
          <AddressModal record={record}>
            <a><Icon type="edit"/>Edit</a> &nbsp;
          </AddressModal>
          <Popconfirm title="Sure to delete?" onConfirm={() => {
            handleDeleteAddress(record);
          }}>
            <a href="#"><Icon type="delete"/>Delete</a>
          </Popconfirm>&nbsp;
          {record.isDefault === 0 ?
            <Popconfirm title="Sure to setting default?" onConfirm={() => {
              handleSettingDefault(record);
            }}>
              <a><Icon type="setting"/>Default</a>
            </Popconfirm> : ''
          }
        </div>
      )
    }
  }];

  return (
    <div style={{marginTop:10}}>
      <AddressModal>
        <Button>Add </Button>
      </AddressModal>
      <Table
        loading={loading}
        style={{marginTop: 5}}
        bordered={true}
        pagination={false}
        columns={columns}
        dataSource={list}
      />
    </div>
  );
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Address);
