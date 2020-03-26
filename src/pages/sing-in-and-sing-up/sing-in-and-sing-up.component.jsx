import React from 'react';
import './sing-in-and-sing-up.style.scss';
import SingIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component';
const SingInAndSingUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SingIn />
        <SignUp />
    </div>
);
export default SingInAndSingUpPage;