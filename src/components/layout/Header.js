import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';


class Header extends Component {
    state={
        isAuthenticated : false,
        navbarToggle:true
    }

    static getDerivedStateFromProps (props,state){
        const {auth} = props;

        if(auth.uid){
            return{
                isAuthenticated:true
            }
        }
        else {
            return {isAuthenticated:false
        }}
    }

    onLogOutClick = e => {
        e.preventDefault();

        const {firebase} = this.props;
        firebase.logout();
    }

    onNavToggleClick = e =>{
        this.setState({
            navbarToggle:!this.state.navbarToggle
        });
    }

    render() {
        const {isAuthenticated,navbarToggle}= this.state;
        const {auth} = this.props;
        const {allowRegistration}= this.props.settings;
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        ClientPanel
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        onClick={this.onNavToggleClick}    
                    >
                            <span class="navbar-toggler-icon"></span> 
                    </button>
                    <div className={`${navbarToggle ? 'collapse' : ''} navbar-collapse`} id="navbarMain">
                        <ul className="navbar-nav mr-auto">
                            {isAuthenticated ? (
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">
                                        Dashboard
                                    </Link>
                                </li>
                            ) : null}
                        </ul>
                        {isAuthenticated ? (
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        {auth.email }
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/settings" className="nav-link">
                                        Settings
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" onClick={this.onLogOutClick}>
                                        Log Out
                                    </a>
                                </li>
                            </ul>
                            ) : null}

                        {allowRegistration && !isAuthenticated ? (
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        ) : null}
                    </div>
                </div>
            </nav>
        )
    }
}

Header.propTypes = {
    firebase:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
    auth:state.firebase.auth,
    settings:state.settings
})

export default compose(
    connect(mapStateToProps),
    firebaseConnect()
)(Header);