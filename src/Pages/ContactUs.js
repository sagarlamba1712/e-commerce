import React  from "react"
import {Link} from "react-router-dom"
import Header from '../components/header'
import Footer from '../components/footer'

export default class ContactUs extends React.Component{
    render(){
        return(
            <div class="wrapper">
	<Header/>
   <div class="container-fluid">
   		<div class="row">
        	<img src="images/contact_us.jpg"  alt=""/>
        </div>
   </div>
   <div class="container-fluid">
   		<div class="row">
        	<div class="container">
            	<div class="content_page">
                    <div class="contact_left">
                        <h3>H.B ELECTRICALS</h3>
                        <p>A-313,Palam Vihar Ext.,<br /> Dharam Colony,Gurugram Haryana-122017</p>
                        <p>Landline:- 0124-2970578</p>
                        <p>Mobile:- 9999334385, 9899717578</p>
                        <p>Accounts:- 9999334585</p>
                        <p>Email Address:- hbelectricals9004@gmail.com</p>
                    </div>
                    <div class="contact_right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.399752873547!2d77.02601784182228!3d28.49893830235878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19931c91e1e9%3A0xd30819644bc0b35e!2sDharam+Colony%2C+Palam+Vihar+Extension%2C+Gurugram%2C+Haryana+122022!5e0!3m2!1sen!2sin!4v1495646850372" width="600" height="450" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
   </div>
    <Footer/>
    <div class="container-fluid copyright_block">
    	<div class="row">
    	<div class="container">
        	<div class="copyright">All  @ Copyright reserved to HB Electricals</div>
        	<ul class="social_top">
                <li><a href="" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                <li><a href="" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
        </div>
        </div>
    </div>
</div>
        )
    }
}