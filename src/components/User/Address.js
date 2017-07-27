import React from 'react';
import './Address.css';
import {Table, Popconfirm, Button, Icon} from 'antd'
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

  const {list, loading} = props.address;

  const columns = [{
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
    width: '20%'
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
    width: '10%',
    render: (text, record, index) => {
      return (
        <div >
          <AddressModal record={record}>
            <a><Icon type="edit"/>Edit</a> &nbsp;&nbsp;
          </AddressModal>
          <Popconfirm title="Sure to delete?" onConfirm={() => {
            handleDeleteAddress(record);
          }}>
            <a href="#"><Icon type="delete"/>Delete</a>
          </Popconfirm>
        </div>
      )
    }
  }];

  const data = [{
    key: '1',
    id: '1',
    country: 'United States',
    fullName: 'Chenguang Zhao',
    streetAddress: 'New York No. 1 Lake Park',
    city: 'San Mateo',
    state: 'CA',
    zipCode: '94402',
    phoneNumber: '646****672'
  }, {
    key: '2',
    id: '2',
    country: 'United States',
    fullName: 'Chenguang Zhao',
    streetAddress: 'New York No. 1 Lake Park',
    city: 'San Mateo',
    state: 'CA',
    zipCode: '94402',
    phoneNumber: '646****672'
  }, {
    key: '3',
    id: '3',
    country: 'United States',
    fullName: 'Chenguang Zhao',
    streetAddress: 'New York No. 1 Lake Park',
    city: 'San Mateo',
    state: 'CA',
    zipCode: '94402',
    phoneNumber: '646****672'
  }, {
    key: '4',
    id: '4',
    country: 'United States',
    fullName: 'Chenguang Zhao',
    streetAddress: 'New York No. 1 Lake Park',
    city: 'San Mateo',
    state: 'CA',
    zipCode: '94402',
    phoneNumber: '646****672'
  }, {
    key: '5',
    id: '5',
    country: 'United States',
    fullName: 'Chenguang Zhao',
    streetAddress: 'New York No. 1 Lake Park',
    city: 'San Mateo',
    state: 'CA',
    zipCode: '94402',
    phoneNumber: '646****672'
  }];

  return (
    <div>
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
