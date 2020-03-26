import React from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfile } from './../../firebase/firebase.utils';
import './sign-up.style.scss'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { email, password, displayName, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("password don't match")
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfile(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h1 className='title'>I dont have an account</h1>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName}
                        handleChange={this.handleChange} label='Display name' />
                    <FormInput type='email' name='email' value={email}
                        handleChange={this.handleChange} label='Email' />
                    <FormInput type='password' name='password' value={password}
                        handleChange={this.handleChange} label='Password' />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword}
                        handleChange={this.handleChange} label='Confirm Password' />
                    <CustomButton type='submit'> Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;