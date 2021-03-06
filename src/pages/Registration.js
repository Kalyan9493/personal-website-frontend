import React, { PureComponent } from 'react'

import '../assets/CSS/Registration.css'

class Registration extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            mobileno: '',
            emailid: '',
            address: '',
            password: '',
            registrationErrors: ''
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    // handleSubmit(event){
    //     console.log('Form Submitted')
    //     event.preventDefault()
    //     console.log(this.state)
    //     axios.post('/users', this.state).then(response => console.log(response)).catch(error => console.log(error))
    //     // io({
    //     //     url: `/users`,
    //     //     method: "POST",
    //     //     data: this.state,
    //     //   }).then(response => console.log(response)).catch(error => console.log(error))
    // }

    render() {
        return (
            <div>
                <form className= 'registrationForm'>
                    <input name = 'firstname' placeholder = 'Enter Your First Name' value = {this.state.firstname} onChange = {this.handleChange} required></input>
                    <input name = 'lastname' placeholder = 'Enter Your Last Name' value = {this.state.lastname} onChange = {this.handleChange} required></input>
                    <input type = 'emailid' name = 'emailid' placeholder = 'Enter Your Email ID' value = {this.state.emailid} onChange = {this.handleChange}></input>
                    <input name = 'mobileno' placeholder = 'Enter Your Mobile Number' value = {this.state.mobileno} onChange = {this.handleChange} required></input>
                    <input name = 'address' placeholder = 'Enter Your Address' value = {this.state.address} onChange = {this.handleChange}></input>
                    <input type= 'password' name = 'password' placeholder = 'Enter Your Password' value = {this.state.password} onChange = {this.handleChange} required></input>
                    <button className='registerbutton' type = 'submit'>Register</button>
                </form>
            </div>          
        )
    }
}

export default Registration