import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    setAllowRegistration,
    setDisableBalanceOnAdd,
    setDisableBalanceOnEdit
} from '../../actions/settingsAction';

class Settings extends Component {
    disableBalanceOnAddChange = () => {
        const { setDisableBalanceOnAdd } = this.props;
        setDisableBalanceOnAdd();
    };
    
    disableBalanceOnEditChange = () => {
        const { setDisableBalanceOnEdit } = this.props;
        setDisableBalanceOnEdit();
    };
    
    allowRegistrationChange = () => {
        const { setAllowRegistration } = this.props;
        setAllowRegistration();
    };
    render() {
        const {disableBalanceOnAdd,disableBalanceOnEdit,allowRegistration}= this.props.settings;    
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                    <Link to="/" className="btn btn-link">
                        <i className="fas fa-arrow-circle-left"></i> Back To Dashboard
                    </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h4>Edit Settings</h4>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group mb-2">
                                <label htmlFor="allowRegistration">Allow Registration : </label>
                                <input type="checkbox" name="allowRegistration" checked={!!allowRegistration} onChange={this.allowRegistrationChange}/> 
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="disableBalanceOnAdd">Disable Balance On Add :</label>
                                <input type="checkbox" name="disableBalanceOnAdd" checked={!!disableBalanceOnAdd} onChange={this.disableBalanceOnAddChange}/> 
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="disableBalanceOnEdit">Disable Balance On Edit :</label>
                                <input type="checkbox" name="disableBalanceOnEdit" checked={!!disableBalanceOnEdit} onChange={this.disableBalanceOnEditChange}/> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Settings.propType = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnEdit:PropTypes.func.isRequired,
    setDisableBalanceOnAdd :PropTypes.func.isRequired,
    setAllowRegistration:PropTypes.func.isRequired
}

const mapStateToProps =(state) => ({
    auth:state.firebase.auth,
    settings: state.settings
})

export default connect(mapStateToProps,{
    setAllowRegistration,
    setDisableBalanceOnAdd,
    setDisableBalanceOnEdit
})(Settings) ;