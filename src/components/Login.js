import React from 'react'

export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
    }

    render(){
        return(
            <div>
                <h3>Sign In: </h3>
                <form onSubmit={this.handleSubmit} >
                    <input name={'username'} value={this.state.username} onChange={this.handleUsernameChange}  />
                    <input name={'username'} value={this.state.password} onChange={this.handlePasswordChange}  />
                    <input type='submit' value= 'login' />
                </form>
            </div>
        )
    }
}