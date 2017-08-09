import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

import { Link } from 'react-router';

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import Container from '../../components/containers/container'


import { CardImg } from 'reactstrap';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';






class ManageShop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      noDataText: 'ไม่มีข้อมูล !',
      loading: false,
      filtered: [],
      current_pages: '',
      data: [],
      pages: null,

      tableOptions: {
        //loading: false,
        filterable: true,
      },
      popup: false,
      show: false,
      //showData: this.props.shopShowAll(state, instance),

    }
    //this.filterShop = this.filterShop
    this.togglePopup = this.togglePopup.bind(this);
    this.conFirmDelete = this.conFirmDelete.bind(this);
    // this.conFirmDelete2 = this.conFirmDelete2.bind(this);



  }


  componentWillMount() {
    console.log("componentWillMount : shopShowAll");
    //this.props.shopShowAll();
    //this.props.shopShowAll('', { field: "shop_name", sortby: "ASC" }, 1, 10)


  }
  componentDidMount() {
    console.log("componentDidMount : ");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate : ");

  }

  togglePopup() {

    this.setState({
      popup: !this.state.popup
    });
  }

  // conFirmDelete() {

  //   console.log("conFirmDelete");

  //   this.setState({
  //     popup: !this.state.popup
  //   });
  // }

  conFirmDelete() {

    console.log("conFirmDelete2");

    this.setState({ show: false })
  }


  filterShop = (state, instance) => {

    this.setState({ loading: true })

    let condition = {};
    state.filtered.map((item, index) => {
      if (item.value !== "") condition[item.id] = item.value;

    });

    let sort = {};

    state.sorted.map((item, index) => {
      sort['field'] = item.id;
      sort['sortby'] = (item.desc === true) ? 'DESC' : 'ASC';
    })


    this.props.shopShowAll(condition, sort, state.page + 1, state.pageSize)


    let res = this.props.shopShow;
    console.log(res)

    this.setState({
      data: res.rows,
      pages: res.total_pages,
      current_pages: res.current_pages,
      loading: false
    })


  }

  render() {
    // ///////////////
    const columns = [
      {
        Header: 'Img',
        id: 'img',
        accessor: 'img',
        sortable: false,
        filterable: false,
        Cell: row => (
          <div
            style={{
              borderRadius: '2px',
              textAlign: 'center'
            }}
          >
            <CardImg top width="64px" height="64px" src={`data:image/png;base64,${row.value}`} />
          </div>
        )
      },
      {
        Header: 'ชื่อร้านค้า',
        id: 'shop_name',// String-based value accessors!
        accessor: d => d.shop_name,
      },
      {
        Header: 'รายละเอียด',
        id: 'description',
        accessor: d => d.description,
        //filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
      },
      {
        Header: 'Sale',
        id: 'sale',
        accessor: d => d.sale,
        //filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
      },
      {
        Header: 'Manage',
        sortable: false,
        filterable: false,
        Cell: row => (
          <div
            style={{
              borderRadius: '2px',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
          >
            <button type="button" className="btn btn-primary btn-sm" style={{ fontSize: '12px  !important' }}>แก้ไข</button>&nbsp;
            {/* <button type="button" onClick={this.togglePopup} className="btn btn-danger btn-sm">ลบ</button>&nbsp; */}

            <button type="button" onClick={() => this.setState({ show: true })} className="btn btn-danger btn-sm">ลบ</button>&nbsp;



          </div>
        )
      }

    ]


    // console.log(this.state.showData);

    return (


      <Container>
        <div className="card-header">
          <strong>Manage Shop</strong> <small>จัดการข้อมูล Shop</small>
          <div style={{ float: 'right' }}>
            <Link to={'/shop/addshop/'} >
              < Button color="success">New Shop</Button>
            </Link>
          </div>
        </div>

        {/* <Modal isOpen={this.state.popup} toggle={this.togglePopup} className={this.props.className}>
          <ModalHeader toggle={this.togglePopup}>ยืนยันการลบ</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.conFirmDelete}>ยืนยัน</Button>{' '}
            <Button color="secondary" onClick={this.togglePopup}>ยกเลิก</Button>
          </ModalFooter>
        </Modal> */}


        {/* <button onClick={() => this.setState({ show: true })}>Alert</button> */}
        <SweetAlert
          warning
          showCancel
          show={this.state.show}
          title="แจ้งเตือน"
          text="ยืนยันการลบ"
          onConfirm={this.conFirmDelete}
          onCancel={this.conFirmDelete}
        //onConfirm={() => this.setState({ show: false })}
        //closeOnConfirm={false}
        />




        <div className="card-block">






          <div className='table-wrap'>
            <ReactTable
              loading={this.state.loading}
              className='-striped -highlight'
              columns={columns}
              data={this.props.shopShow.rows} // should default to []
              pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
              defaultPageSize={10}
              defaultSorted={[{
                id: 'shop_name',
                desc: false
              }]}
              noDataText={this.state.noDataText}
              sortable
              manual // Forces table not to paginate or sort automatically, so we can handle it server-side
              filterable
              onFetchData={this.filterShop}
            //onFetchData={this.state.showData}


            />
          </div>
        </div>
      </Container >
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.shop.error,
    shopShow: state.shop.all,
  }
}


export default connect(mapStateToProps, actions)(ManageShop);

