import React from 'react'
import './login.css'
class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',pwd:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({pwd:event.target.pwd});
    }
  
    handleSubmit(event) {
      alert('Login Sucessfully' );
     
      event.preventDefault();
    }
  
    render(){
        return(
            <div className='div-login'>
                
                    <h1>ACCOUNT LOGIN</h1>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        Email<input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        Password<input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
  export default Login;