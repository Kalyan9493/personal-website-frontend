import React, { PureComponent } from 'react'
import "../assets/CSS/Login.css"

class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className = 'login'>
                <form className = 'loginForm' onSubmit = {this.handleSubmit}>
                    <input type = 'text' name = 'username' placeholder = 'Enter Your Username' value = {this.state.username} onChange = {this.handleChange} required></input><p></p>
                    <input type= 'password' name = 'password' placeholder = 'Enter Your Password' value = {this.state.password} onChange = {this.handleChange} required></input>
                    <button className = 'loginbutton'  type = 'submit'>Login</button>
                </form>
            </div>  
        )
    }
}

export default Login