import React, { Component } from 'react';

import { Button } from 'reactstrap'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


var ObjectRow = React.createClass({

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  },
  render: function () {
    return (
      <tr>
        <td>{this.props.index}MK Restualrant</td>
        <td>26/05/2017</td>
        <td>Phanumas S.</td>
        <td>
          <span className="badge badge-success">Active</span>
        </td>
        <td>
          <div>
            {/*<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret color="primary" size="sm">
                Action
                            </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>*/}
          </div>
        </td>
      </tr>


    );
  },
});


class Tables extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }



  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> รายการร้านค้า
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-condensed">
                  <thead>
                    <tr>
                      <th>ชื่อร้านค้า</th>
                      <th>วันที่สร้าง</th>
                      <th>พนักงานขาย</th>
                      <th>สถานะ</th>
                      <th>จัดการ</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[...Array(10)].map((x, i) =>
                      <ObjectRow key={i + 1} index={i + 1} />
                    )}
                  </tbody>
                  <tbody>


                    <tr>
                      <td>MK Restualrant</td>
                      <td>26/05/2017</td>
                      <td>Phanumas S.</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>MK Restualrant</td>
                      <td>26/05/2017</td>
                      <td>Phanumas S.</td>
                      <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>MK Restualrant</td>
                      <td>26/05/2017</td>
                      <td>Phanumas S.</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>MK Restualrant</td>
                      <td>26/05/2017</td>
                      <td>Phanumas S.</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>MK Restualrant</td>
                      <td>26/05/2017</td>
                      <td>Phanumas S.</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                      <td>
                        <div>
                          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret color="primary" size="sm">
                              Action
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Header</DropdownItem>
                              <DropdownItem disabled>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                      </td>
                    </tr>


                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>



      </div>

    )
  }
}

export default Tables;
