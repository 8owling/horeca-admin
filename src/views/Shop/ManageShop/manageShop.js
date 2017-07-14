import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../actions'

import { Link } from 'react-router';

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import Container from '../../../components/containers/container'


import { CardImg } from 'reactstrap';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




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
      }
    }
    this.filterShop = this.filterShop

  }


  componentWillMount() {
    console.log("componentWillMount : shopShowAll");
    //this.props.shopShowAll();
  }
  componentDidMount() {
    console.log("componentDidMount : ");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate : ");

  }





  filterShop = (state, instance) => {
    this.setState({ loading: true })

    console.log("filtered : " + state.filtered);

    let condition = {};

    state.filtered.map((item, index) => {
      if (item.value !== "") condition[item.id] = item.value;

    });



    let sort = {};

    state.sorted.map((item, index) => {
      sort['field'] = item.id;
      sort['sortby'] = (item.desc === true) ? 'DESC' : 'ASC';
    })


    axios.get('http://192.168.4.161/laravel_study/public/shop/show', {
      params: {
        filtered: condition,
        sorted: sort,
        page: state.page + 1,
        pageSize: state.pageSize,
      }
    })
      .then((res) => {
        console.log("current_pages from server-side")
        console.log(res.data.current_pages)
        // Update react-table


        this.setState({
          data: res.data.rows,
          pages: res.data.total_pages,
          current_pages: res.data.current_pages,
          loading: false
        })
      }).catch((e) => {
        console.log("filterShopErr :" + e);
        this.setState({
          loading: false,
          noDataText: 'Connection Error !',
        })
      });
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
      }

    ]


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


        <div className="card-block">

          <div className='table-wrap'>
            <ReactTable
              loading={this.state.loading}
              className='-striped -highlight'

              columns={columns}


              data={this.state.data} // should default to []
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

            />
          </div>

          {/*<div style={{ textAlign: 'center' }}>
          <br />
          <em>Tip: Hold shift when sorting to multi-sort!</em>
        </div>*/}


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

