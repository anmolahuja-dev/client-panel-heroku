import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Spinner from '../utilities/Spinner';

class ClientDetails extends Component {
    
    state={
        showBalanceUpdate: false,
        balanceUpdateAmount:''
    }

    onChange=(e)=>{
        this.setState({
          [e.target.name]:e.target.value  
        });
    }

    onDeleteClick = e => {
        const {firestore,client} = this.props;
        firestore.delete({collection:'clients', doc:client.id}).then(()=> this.props.history.push('/'));
    }

    balanceSubmit = (e) => {
        e.preventDefault();
        const {firestore,client} = this.props;
        const {balanceUpdateAmount} = this.state;

        // This variable holds the attributes we wanna upgrade
        const clientUpdate = {
            balance:parseFloat(balanceUpdateAmount)
        }

        // update in firestore
        firestore.update({collection:'clients', doc:client.id},clientUpdate).then(()=> this.setState({
            showBalanceUpdate:false,
            balanceUpdateAmount:''
        }));
    }

    render() {
        const {client} = this.props;
        const {showBalanceUpdate,balanceUpdateAmount}=this.state;
        
        let balanceForm = '';

        if(showBalanceUpdate){
            balanceForm=(
                <form onSubmit={this.balanceSubmit}>
                    <div className="input-group">
                        <input 
                            type="number" 
                            className="form-control"
                            name="balanceUpdateAmount"
                            value={balanceUpdateAmount}
                            onChange={this.onChange}    
                        />
                        <div className="input-group-append">
                            <input type="submit" value="Update" className="btn btn-outline-dark"/>
                        </div>
                    </div>
                </form>
            )
        }
        else{
            balanceForm=null;
        }

        if(client){
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to="/" className="btn btn-link">
                                <i className="fas fa-arrow-circle-left"></i> Back To Dashboard
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-group float-end">
                                <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                                    Edit
                                </Link>
                                <button className="btn btn-danger" onClick={this.onDeleteClick}>Delete</button>
                            </div>    
                        </div>    
                    </div> 
                    <hr />
                    <div className="card">
                        <h3 className="card-header">
                            {client.firstName} {client.lastName}
                        </h3>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8 col-sm-6">
                                    <h4>
                                        Client ID:{' '}
                                        <span className="text-secondary">
                                            {client.id}
                                        </span>
                                    </h4>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <h3 className="pull-end">
                                        Balance:<span className={classNames({
                                            'text-danger':client.balance > 0,
                                            'text-success':client.balance==0
                                        })}> ${parseFloat(client.balance).toFixed(2)} </span>
                                        {' '}
                                        <small>
                                            <a href="#" onClick={()=> this.setState({
                                                showBalanceUpdate:!this.state.showBalanceUpdate
                                            })}>
                                                <i className="fas fa-pencil-alt"></i>   
                                            </a>
                                        </small>
                                    </h3>
                                    { balanceForm}

                                </div>
                            </div>
                            <hr />
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Contact Email: {client.email}
                                </li>
                                <li className="list-group-item">
                                    Contact Phone : {client.phone}
                                </li>
                            </ul>
                        </div>
                    </div>     
                </div>
            )
        }
        else {
            return <Spinner/>;
        }
    }
}

// we stored clients as client and only the client with the matching id is stored in the client array so we use client[0] from it
const mapStateToProps=(state)=>{
    const client=state.firestore.ordered.client &&state.firestore.ordered.client[0] ;
    return {
        client:client
    }  
}

ClientDetails.propTypes = {
    firestore: PropTypes.object.isRequired
}

//here we are using props as we need an id from it
export default compose( 
    connect(mapStateToProps),
    firestoreConnect(
        props=>[{collection:'clients',storeAs:'client',doc:props.match.params.id}]
    )
)(ClientDetails);