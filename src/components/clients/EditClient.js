import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Spinner from '../utilities/Spinner';

class EditClient extends Component {
    constructor(props){
        super(props);
        this.firstNameInput = React.createRef();
        this.lastNameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
        this.balanceInput = React.createRef();
    }

    onSubmit=e=>{
        e.preventDefault();
        const {client,firestore}= this.props;

        //update client
        const updClient = {
            firstName: this.firstNameInput.current.value,
            lastName: this.lastNameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
            balance: this.balanceInput.current.value === '' ? 0 : this.balanceInput.current.value       
        }

        firestore.update({collection:'clients',doc:client.id},updClient)
            .then(()=>{
                this.props.history.push('/');
            });
    }

    render() {
        const {client} = this.props;
        if(client){
            return (
                <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left"></i> Back to dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Edit Client
                    </div>
                    <div className="card-body">
                        <form action="post" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName"> First Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    minLength="2"
                                    required
                                    onChange={this.onChange}
                                    defaultValue={client.firstName}
                                    ref={this.firstNameInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName"> Last Name</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    minLength="2"
                                    required
                                    defaultValue={client.lastName}
                                    ref={this.lastNameInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"> Email</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    required
                                    defaultValue={client.email}
                                    ref={this.emailInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone"> Phone</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    minLength="10"
                                    required
                                    defaultValue={client.phone}
                                    ref={this.phoneInput}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="balance"> Balance</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    name="balance"
                                    defaultValue={client.balance}
                                    ref={this.balanceInput}
                                />
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary mt-2"/>
                        </form>
                    </div>
                </div>
            </div>
            )
        }
        else {
            return <Spinner/>
        }
    }
}

const mapStateToProps=(state)=>{
    const client=state.firestore.ordered.client &&state.firestore.ordered.client[0] ;
    return {
        client:client
    }  
}

EditClient.propTypes = {
    firestore: PropTypes.object.isRequired
}

//here we are using props as we need an id from it
export default compose( 
    connect(mapStateToProps),
    firestoreConnect(
        props=>[{collection:'clients',storeAs:'client',doc:props.match.params.id}]
    )
)(EditClient);