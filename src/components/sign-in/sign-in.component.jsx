import React from 'react';
import './sing-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'
class SingIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' name='email' value={this.state.email} required type='email' handleChange={this.handleChange} />
                    <FormInput label='password' name='password' value={this.state.password} required type='password' handleChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SingIn;