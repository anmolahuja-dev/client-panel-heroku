import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import { notifyUser } from '../../actions/notifyActions';
import Alert from '../utilities/Alert';

class Register extends Component {
    state={
        email:'',
        password:'',
        showAlert:true
    }

    componentWillMount() {
        const { allowRegistration } = this.props.settings;
    
        if (!allowRegistration) {
          this.props.history.push('/dashboard');
        }
    }

    onChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value  
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const {firebase,notifyUser} =  this.props; //notifyUser action is availabe in props
        const {email,password} =  this.state;
        firebase.createUser(
            {
                email,
                password
            }
        )
        .then(()=> this.props.history.push('/dashboard'))
        .catch(error => {
            notifyUser('User Already Registered','error');
            setTimeout(() => {
                this.setState({
                    showAlert:!this.state.showAlert,
                })
                notifyUser(null,null)
            }, 2000);
        });
    }
    
    render() {
        const {message,messageType} = this.props.notify;
        const {showAlert} = this.state;
        return (
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            {(message && showAlert) ? (
                                <Alert message={message} messageType={messageType}/>
                            ):null}
                            <h1 className="text-center pb-4 pt-3">
                                <span className="text-primary">
                                    <i className="fa fa-user-plus"></i> Register
                                </span>
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email" className="fw-bold">Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        className="form-control" 
                                        required
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="fw-bold">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        className="form-control" 
                                        required
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <input type="submit" value="Register" className="btn btn-primary mt-2" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    firebase:PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    notify:state.notify,
    settings:state.settings
})

export default compose(
    connect(mapStateToProps,{notifyUser}),
    firebaseConnect()
)(Register);
// Actions must be passed in connect