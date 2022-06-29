import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from '../components/header'
export default class Enquiry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      YourName: "",
      EmailAddress:"",
      PhoneNumber:"",
      YourMessage:""
    };
  }
  handleYourNameChange = (event) => {
    this.setState({
      YourName: event.target.value,
    });
  };
  handleEmailAddressChange =(event) =>{
  this.setState({
    EmailAddress: event.target.value,
  })
};
  handlePhoneNumberChange = (event) =>{
  this.setState({
    PhoneNumber: event.target.value,
  })
  }
  handleYourMessageChange = (event) =>{
    this.setState({
        YourMessage: event.target.value
    })
  }
  handleSubmit = (event) =>{
    alert(`${this.state.YourName}${this.state.EmailAddress}${this.state.PhoneNumber}${this.state.YourMessage}`)
    event.PreventDefault()
  
  }
  render() {
    return (
      <div class="wrapper">
        <Header />
        <div class="container-fluid">
          <div class="row">
            <img src="images/enquire_now.jpg" alt="" />
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="container">
              <div class="content_page">
                <div className="enquire_forms">
                  <h6>
                    Our team is always available to answer your queries. Be sure
                    to go through FAQ before sending the question to find the
                    solution as fast as possible.
                  </h6>
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      name="fname"
                      value={this.state.YourName}
                      onChange={this.handleYourNameChange}
                      placeholder="Your Name"
                    />
                    <input
                      type="text"
                      name="email"
                      value={this.state.EmailAddress}
                      onChange={this.handleEmailAddressChange}
                      placeholder="Email Address"
                    />
                    <input
                      type="text"
                      name="phone"
                      value={this.state.PhoneNumber}
                      onChange={this.handlePhoneNumberChange}
                      placeholder="Phone Number"
                    />
                    <textarea
                      name="message"
                      value={this.state.YourMessage}
                      onChange={this.handleYourMessageChange}
                      placeholder="Your Message"
                    ></textarea>
                    <button type="Submit"> SUBMIT YOUR QUERY </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
        <div class="container-fluid copyright_block">
          <div class="row">
            <div class="container">
              <div class="copyright">
                All @ Copyright reserved to HB Electricals
              </div>
              <ul class="social_top">
                <li>
                  <a href="" target="_blank">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <i class="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
