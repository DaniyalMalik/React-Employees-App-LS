import React, { Component } from 'react';
import swal from 'sweetalert';

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    repeat_password: '',
  };

  onchange = () => {
    let email = document.getElementById('emailR').value;
    let password = document.getElementById('passwordR').value;
    let repeat_password = document.getElementById('repeat-password').value;
    this.setState({ email, password, repeat_password });
  };

  onregister = (e) => {
    e.preventDefault();
    const { email, password, repeat_password } = this.state;
    if (password === repeat_password) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      swal('Greetings!', 'Registered!', 'success');
      window.location = '/dashboard';
    } else {
      swal('Greetings!', 'Passwords Not Match!', 'error');
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='container mt-5'>
        <div className='card'>
          <div className='card-header'>
            <h3>Register Form</h3>
          </div>
          <div className='card-body'>
            <form action='' method='post' onSubmit={this.onregister}>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Email</span>
                </div>
                <input
                  onChange={this.onchange}
                  type='email'
                  id='emailR'
                  placeholder='Enter Email'
                  name='email'
                  value={email}
                  className='form-control'
                  required
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Password</span>
                </div>
                <input
                  onChange={this.onchange}
                  type='password'
                  id='passwordR'
                  value={password}
                  name='password'
                  placeholder='Enter Password'
                  className='form-control'
                  required
                />
              </div>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Repeat Password</span>
                </div>
                <input
                  type='password'
                  id='repeat-password'
                  name='repeat-password'
                  placeholder='Repeat Password'
                  className='form-control'
                  required
                />
              </div>
              <input
                type='submit'
                className='btn btn-secondary btn-block'
                name='submit'
                value='Register'
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
