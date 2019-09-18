import React from 'react'

import './login-page.style.scss';

import LoginBox from '../../components/login-box/login-box.component'

export const LoginPage = () => (
    <div className='login-page'>
        <div className='titulo'>Handover</div>
        <LoginBox/>
    </div>
)