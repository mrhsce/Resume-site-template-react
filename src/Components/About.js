import React, { Component } from 'react';
import * as actions from "../store/actions";
import {connect} from "react-redux";

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }
      var resumeDownload = this.props.resumedownload;

    return (
      <section id="about">
      <div className="row">
         <div className="twelve columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href='./resume.pdf' download className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
                   <p>
                       <a href='./Introducion.m4a' download className="button"><i className="fa fa-headphones"></i>Introducing Myself</a>
                   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resumedownload: () => dispatch(actions.profile.getResume())

    };
};

export default About= connect(mapStateToProps, mapDispatchToProps)(About);
