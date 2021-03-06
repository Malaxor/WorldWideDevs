import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
   const [ formData, setFormData ] = useState({
      email: '',
      password: '',
   });
   const { email, password } = formData;

   const onChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   } 
   const onSubmit = e => {
      e.preventDefault();
      login(formData);
   }

   if(isAuthenticated) {
      return <Redirect to="/dashboard"></Redirect>;
   }
   return (
      <Fragment>
         <h1 className="large text-primary">Sign In</h1>
         <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
         <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
               <input 
                  type="email" 
                  placeholder="Email Address" 
                  name="email"
                  value={email}
                  onChange={onChange} 
               />
            </div>
            <div className="form-group">
               <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  minLength="6"
                  value={password}
                  onChange={onChange} 
               />
            </div>
            <input type="submit" className="btn btn--primary" value="Log In" />
         </form>
         <p className="my-8">
            Don't have an account? <Link to='/register'>Register</Link>
         </p>
      </Fragment>
   );   
};
const mapStateToProps = state => ({ isAuthenticated: state.auth.isAuthenticated });
export default connect(mapStateToProps, { login })(Login);
