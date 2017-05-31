import React, { Component } from 'react';

import ReactTable from 'react-table'

//import ReactTable from '../../../../lib/index'
import 'react-table/react-table.css'





class ManageShop extends Component {



  // sidebarToggle(e) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-hidden');
  // }


  // setTableOption(event) {
  //   const target = event.target
  //   const value = target.type === 'checkbox' ? target.checked : target.value
  //   const name = target.name
  //   this.setState({
  //     tableOptions: {
  //       ...this.state.tableOptions,
  //       [name]: value
  //     }
  //   })
  // }

  setTableOption = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      tableOptions: {
        ...this.state.tableOptions,
        [name]: value
      }
    })
  }



  constructor(props) {
    super(props);

    const data = [
      {
        shopName: 'Phanumas Linsley',
        description: 'Test Test Test Test',
        sale: {
          saleUsername: 'Taylor.swift',
          salePassword: '123456'
        }
      },
      {
        shopName: 'Tanner Linsley ddDDD',
        description: 'Test Test Test Test',
        sale: {
          saleUsername: 'Jason.Maurer',
          salePassword: '123456'
        }

      }]


    this.state = {
      tableOptions: {
        loading: false,
        showPagination: true,
        showPageSizeOptions: true,
        showPageJump: true,
        collapseOnSortingChange: true,
        collapseOnPageChange: true,
        collapseOnDataChange: true,
        freezeWhenExpanded: false,
        filterable: true,
        sortable: true,
        resizable: true
      },
      data: data
    }
    this.setTableOption = this.setTableOption
  }


  render() {

    // ///////////////

    const columns = [
      {
        Header: 'ชื่อร้านค้า',
        //accessor: 'shopName', // String-based value accessors!
        //filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
        id: 'shopName',
        accessor: d => d.shopName,
        filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
        //filterMethod: (filter, row) => (row[filter.id].startsWith(filter.value) && row[filter.id].endsWith(filter.value))
      },
      {
        Header: 'Description',
        accessor: 'description',
        Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
        filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
      },
      {
        id: 'SaleName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.sale.saleUsername, // Custom value accessors!
        filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
      },
      {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'sale.salePassword'
      }
    ]


    return (

      <div>
        {
          Object.keys(this.state.tableOptions).map(optionKey => {
            const optionValue = this.state.tableOptions[optionKey]
            return (
              <tr key={optionKey}>
                <td>{optionKey}</td>
                <td style={{ paddingLeft: 10, paddingTop: 5 }}>
                  <input type='checkbox'
                    name={optionKey}
                    checked={optionValue}
                    onChange={this.setTableOption}
                  />
                </td>
              </tr>
            )
          })
        }
        <div className='table-wrap'>
          <ReactTable
            className='-striped -highlight'
            data={this.state.data}
            columns={columns}
            defaultPageSize={5}
            defaultFilterMethod={(filter, row) => (String(row[filter.id]) === filter.value)}
            {...this.state.tableOptions}

          />
        </div>

        {/*<div style={{ textAlign: 'center' }}>
          <br />
          <em>Tip: Hold shift when sorting to multi-sort!</em>
        </div>*/}


      </div>

    )
  }
}









const CodeHighlight = require('../../../components/codeHighlight').default
//const source = require('!raw!./ManageShop')

//export default ManageShop;


export default () => (
  <div className="animated fadeIn">
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <ManageShop />
          <CodeHighlight>{() => ManageShop}</CodeHighlight>
        </div>
      </div>
    </div>
  </div>
)
