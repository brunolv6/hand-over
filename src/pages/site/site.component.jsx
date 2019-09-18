import React from 'react';

import { connect } from 'react-redux';

import { LoginPage } from '../login-page/login-page.components'
import { entrarSair } from '../../redux/user/user.action';
import { Homepage } from '../homepage/homepage.component';

import { Route } from 'react-router-dom';

const Site = ({isSignedIn}) => (
    <div>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/homepage' component={Homepage}/>
    </div>
)

/* http://sandbox.oihandover.com/business/login

{
    email: handover@oihandover.com
    password: admin
    post
} */


const mapStateToProps = (state) => ({
    isSignedIn: state.user.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({
    entrarSair: () => dispatch(entrarSair())
})

export default connect(mapStateToProps, mapDispatchToProps)(Site);
