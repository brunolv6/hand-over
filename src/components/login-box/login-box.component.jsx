import React from 'react';

import './login-box.style.scss';

import { connect } from 'react-redux';

import { recebePassword, recebeEmail, entrarSair } from '../../redux/user/user.action';

const LoginBox = ({ password, recebePassword, email, recebeEmail, entrarSair }) => (
    <div className='login-box'>
        <div className='texto'>
            <h1>Faça login aqui</h1>
            <p>Você esta a um passo de acessar lockers inteligentes por todo o Brasil!</p>
        </div>
        <div className='login-form'>
            <div className='entrada-input'>
                <input className='input-login' type='text' value={email} onChange={recebeEmail}/>
                <label className={
                    `${email ? 'diminuir' : ''} 
                    label-login`
                }>Email</label>
            </div>
            <div className='entrada-input'>
                <input className='input-login' type='password' value={password} onChange={recebePassword}/>
                <label className={
                    `${password ? 'diminuir' : ''} 
                    label-login`
                }>Password</label>
            </div>
            <button className='botao' onClick={entrarSair}>Entrar</button>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    email: state.user.email,
    password: state.user.password,
    isSignedIn: state.user.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({
    recebeEmail: event => dispatch(recebeEmail(event.target.value)),
    recebePassword: event => dispatch(recebePassword(event.target.value)),
    entrarSair: () => dispatch(entrarSair())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);