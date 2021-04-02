import React, { Component } from 'react';

export default class Info extends Component {
  state = {
    // count: 0,
    name: '',
    email: '',
    number: '',
    date: '',
    salary: '',
  };

  onadd = () => {
    const { name, email, number, date, salary } = this.state;
    if (localStorage.getItem('data') !== null) {
      let storage = localStorage.getItem('data');
      storage = JSON.parse(storage);
      let data = [{ name, email, number, date, salary }];
      data = data.concat(storage);
      localStorage.setItem('data', JSON.stringify(data));
    } else {
      let data = [{ name, email, number, date, salary }];
      localStorage.setItem('data', JSON.stringify(data));
    }
    // ++count;
    // this.setState({ count });
  };

  onchange = () => {
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let salary = document.getElementById('salary').value;
    let date = document.getElementById('date').value;
    this.setState({ name, email, number, date, salary });
  };

  render() {
    const { name, email, number, date, salary } = this.state;
    let data = localStorage.getItem('data');
    data = JSON.parse(data);
    console.log(data);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='table table-stripped'>
              <thead>
                <tr>
                  {/* <th>Serial No. </th> */}
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Date Of Joining</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value) => {
                  return (
                    <tr>
                      {/* <td>{value.count}</td> */}
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
                            value='Delete'
                          />
                          <input
                            type='submit'
                            className='btn btn-secondary'
                            value='Edit'
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </div>
          </div>
          <div className='col-md-3'>
            <input
              type='submit'
              className='btn btn-block btn-success'
              value='Add'
              data-toggle='modal'
              data-target='#addData'
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
                      id='name'
                      placeholder='Enter Name'
                      value={name}
                      name='name'
                      onChange={this.onchange}
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
                      id='email'
                      onChange={this.onchange}
                      placeholder='Enter Email'
                      value={email}
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
                      id='number'
                      placeholder='Enter Phone Number'
                      value={number}
                      name='number'
                      onChange={this.onchange}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>Salary</span>
                    </div>
                    <input
                      value={salary}
                      type='number'
                      id='salary'
                      placeholder='Enter Salary'
                      name='salary'
                      onChange={this.onchange}
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
                      id='date'
                      value={date}
                      onChange={this.onchange}
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
      </div>
    );
  }
}
