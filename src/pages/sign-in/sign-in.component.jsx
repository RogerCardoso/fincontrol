import React from 'react';

import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../../components/custom-button/custom-button.components'

import './sign-in.styles.scss';

const SignOrRegisterPage = props => (
    <div className='signin-page'>
        <Link to='/'>
            <CustomButton onClick={ signInWithGoogle }>Sign In With Google</CustomButton>
        </Link>
    </div>
)
  
export default SignOrRegisterPage;