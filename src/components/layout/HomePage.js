import React, { Component } from 'react';
import './Homepage.css';

export default class HomePage extends Component {
    render() {
        return (
            <>
            <div className="container  text-center main">
                <div className="row " >
                    <div className="col-sm-0 col-md-5"></div>
                    <div className="col-sm-12 col-md-7 mt-3 ps-md-5 pe-md-0">
                        <h1 style={{fontFamily:"'Anton', sans-serif", fontSize:"100px"}}>
                        <span className="text-primary">CLIENT</span> PANEL</h1>
                        <p className="lead mainlead">An Application that lets you keep record of all the transactions that a client owes you</p>
                        <a className="btn btn-primary btn-lg" href="#sec2">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="container text-center section2" id="sec2">
                <div className="row">
                    <div className="col-sm-12 col-md-7 mt-5">
                        <h3 style={{fontFamily:" 'Bebas Neue', sans-serif", fontSize:"100px" }}><span className="text-primary">ADD/EDIT</span> CLIENTS</h3>
                        <p className="lead ">
                            Only Authorized User Can Add and Edit Clients Data.<br/>
                            Authorized User's can Add User Information like Client's Name, Email Id , Phone Number and the amount of money they owe you. <br />
                            Authorized User's can also Edit Client's Information and Balance they owe to your organization. <br />
                            The Information Added will be saved in a secure server powered by Google Firebase.
                        </p>
                    </div>
                    <div className="col-sm-0 col-md-5"></div>
                </div>
            </div>
            <div className="container section3 text-center mt-5" id="sec3">
                <div className="row">
                    <div className="col-sm-0 col-md-5"></div>
                    <div className="col-sm-12 col-md-7 mt-5 pe-md-0 ps-md-5">
                        <h3 style={{fontFamily:" 'Bebas Neue', sans-serif", fontSize:"100px" }}>Application <span className="text-primary">Settings</span></h3>
                        <p className="lead ">
                            Authorized User Can also change application settings like <br /> disabling Balance Edit<br/> Stop Further Registrations to the organization
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">

                <footer className="text-center text-white footer " >
             
                <div className="container pt-4">
                    <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i class="fab fa-facebook-f"></i
                    ></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i class="fab fa-twitter"></i
                    ></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i class="fab fa-google"></i
                    ></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i class="fab fa-instagram"></i
                    ></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i class="fab fa-linkedin"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i class="fab fa-github"></i
                    ></a>
                    </section>
                </div>
                <div className="text-center text-dark p-3 footerB" >
                    © Anmol Ahuja : {' '}
                    <a className="text-dark" href="https://anmolahuja-dev.github.io/">www.anmolahuja.com</a>
                </div>
                </footer>
                
                </div>
            </>
        )
    }
}
