import React, { Component } from 'react';

export default class Info extends Component {
  state = {
    name_1: '',
    email_1: '',
    number_1: '',
    date_1: '',
    salary_1: '',
    name_2: '',
    email_2: '',
    number_2: '',
    date_2: '',
    salary_2: '',
  };

  ondelete = (value) => {
    let storage = localStorage.getItem('data');
    storage = JSON.parse(storage);
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].email === value.email) {
        storage.splice(i, 1);
        localStorage.setItem('data', JSON.stringify(storage));
        this.forceUpdate();
      }
    }
  };

  onlogout = () => {
    window.location = '/';
  };

  onupdateclick = (value) => {
    let email = value.email;
    let name = value.name;
    let number = value.number;
    let salary = value.salary;
    let date = value.date;
    this.setState({
      name_2: name,
      email_2: email,
      number_2: number,
      date_2: date,
      salary_2: salary,
    });
  };

  onupdate = () => {
    const { name_2, email_2, number_2, date_2, salary_2 } = this.state;
    let storage = localStorage.getItem('data');
    storage = JSON.parse(storage);
    let data = {
      name: name_2,
      email: email_2,
      number: number_2,
      date: date_2,
      salary: salary_2,
    };
    for (let i = 0; i < storage.length; i++) {
      if (storage[i].email === email_2) {
        storage.splice(i, 1, data);
        localStorage.setItem('data', JSON.stringify(storage));
      }
    }
  };

  onadd = () => {
    const { name_1, email_1, number_1, date_1, salary_1 } = this.state;
    let data = [
      {
        name: name_1,
        email: email_1,
        number: number_1,
        date: date_1,
        salary: salary_1,
      },
    ];
    if (localStorage.getItem('data') !== null) {
      let storage = localStorage.getItem('data');
      storage = JSON.parse(storage);
      data = storage.concat(data);
      localStorage.setItem('data', JSON.stringify(data));
    } else {
      localStorage.setItem('data', JSON.stringify(data));
    }
  };

  onchange_1 = () => {
    let email = document.getElementById('email-1').value;
    let name = document.getElementById('name-1').value;
    let number = document.getElementById('number-1').value;
    let salary = document.getElementById('salary-1').value;
    let date = document.getElementById('date-1').value;
    this.setState({
      name_1: name,
      email_1: email,
      number_1: number,
      date_1: date,
      salary_1: salary,
    });
  };

  onchange_2 = () => {
    let email = document.getElementById('email-2').value;
    let name = document.getElementById('name-2').value;
    let number = document.getElementById('number-2').value;
    let salary = document.getElementById('salary-2').value;
    let date = document.getElementById('date-2').value;
    this.setState({
      name_2: name,
      email_2: email,
      number_2: number,
      date_2: date,
      salary_2: salary,
    });
  };

  render() {
    const {
      name_1,
      email_1,
      number_1,
      date_1,
      salary_1,
      name_2,
      email_2,
      number_2,
      date_2,
      salary_2,
    } = this.state;
    let data = localStorage.getItem('data');
    data = JSON.parse(data);
    console.log(data);
    let count = 1;
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='table table-stripped'>
              <thead>
                <tr>
                  <th>Serial No. </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Date Of Joining</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length !== 0
                  ? data.map((value) => {
                      return (
                        <tr>
                          <td>{count++}</td>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                          <td>{value.number}</td>
                          <td>{value.date}</td>
                          <td>{value.salary}</td>
                          <td>
                            <div className='btn-group'>
                              <input
                                type='submit'
                                className='btn btn-danger'
                                onClick={() => this.ondelete(value)}
                                value='Delete'
                              />
                              <input
                                onClick={() => this.onupdateclick(value)}
                                type='submit'
                                data-toggle='modal'
                                data-target='#updateData'
                                className='btn btn-secondary'
                                value='Edit'
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </div>
          </div>
          <div className='col-md-3'>
            <input
              type='submit'
              className='btn btn-success btn-block'
              value='Add'
              data-toggle='modal'
              data-target='#addData'
            />
            <input
              type='submit'
              className='btn btn-primary btn-block'
              onClick={this.onlogout}
              value='Logout'
            />
          </div>
        </div>
        <div class='modal' id='addData'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h4 class='modal-title'>Add Employee</h4>
                <button type='button' class='close' data-dismiss='modal'>
                  &times;
                </button>
              </div>
              <div class='modal-body'>
                <form action='' onSubmit={this.onadd}>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Name</span>
                    </div>
                    <input
                      type='text'
                      id='name-1'
                      placeholder='Enter Name'
                      value={name_1}
                      name='name'
                      onChange={this.onchange_1}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Email</span>
                    </div>
                    <input
                      type='email'
                      id='email-1'
                      onChange={this.onchange_1}
                      placeholder='Enter Email'
                      value={email_1}
                      name='email'
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Phone Number</span>
                    </div>
                    <input
                      type='text'
                      id='number-1'
                      placeholder='Enter Phone Number'
                      value={number_1}
                      name='number'
                      onChange={this.onchange_1}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Salary</span>
                    </div>
                    <input
                      value={salary_1}
                      type='number'
                      id='salary-1'
                      placeholder='Enter Salary'
                      name='salary'
                      onChange={this.onchange_1}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Date of Joining</span>
                    </div>
                    <input
                      type='date'
                      id='date-1'
                      value={date_1}
                      onChange={this.onchange_1}
                      name='date'
                      className='form-control'
                      required
                    />
                  </div>
                  <input
                    value='Add'
                    name='add'
                    type='submit'
                    class='btn btn-success btn-block'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class='modal' id='updateData'>
          <div class='modal-dialog'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h4 class='modal-title'>Update Employee</h4>
                <button type='button' class='close' data-dismiss='modal'>
                  &times;
                </button>
              </div>
              <div class='modal-body'>
                <form action='' onSubmit={this.onupdate}>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Name</span>
                    </div>
                    <input
                      type='text'
                      id='name-2'
                      placeholder='Enter Name'
                      value={name_2}
                      name='name'
                      onChange={this.onchange_2}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Email</span>
                    </div>
                    <input
                      type='email'
                      id='email-2'
                      onChange={this.onchange_2}
                      placeholder='Enter Email'
                      value={email_2}
                      name='email'
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Phone Number</span>
                    </div>
                    <input
                      type='text'
                      id='number-2'
                      placeholder='Enter Phone Number'
                      value={number_2}
                      name='number'
                      onChange={this.onchange_2}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Salary</span>
                    </div>
                    <input
                      value={salary_2}
                      type='number'
                      id='salary-2'
                      placeholder='Enter Salary'
                      name='salary'
                      onChange={this.onchange_2}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Date of Joining</span>
                    </div>
                    <input
                      type='date'
                      id='date-2'
                      value={date_2}
                      onChange={this.onchange_2}
                      name='date'
                      className='form-control'
                      required
                    />
                  </div>
                  <input
                    value='Update'
                    name='update'
                    type='submit'
                    class='btn btn-success btn-block'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
