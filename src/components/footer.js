import React from "react"
import {Link} from "react-router-dom"
export default class Footer extends React.Component{
render(){
    return(
        <div>

<div class="container-fluid footer_block">
    	<div class="row">
    	<div class="container">
        	<div class="bottom_links">
            	<h3>Info Pages</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>          
                    <li><Link to="/whoweare">Who We are</Link></li>          
                    <li><Link to="/products">Products</Link></li>                   
                    <li><Link to="/enquiry">Enquire Now</Link></li>          
                    <li><Link to="/contacts">Contact Us</Link></li>
                </ul>
            </div>
            <div class="bottom_links">
            	<h3>Product Range</h3>
                <ul>
                    <li><Link to="Switches & Switchgear">Switches & Switchgear</Link></li>
                    <li><Link to="Appliances">Appliances</Link></li>
                    <li><Link to="Flexible cables">Flexible cables</Link></li>
                    <li><Link to="Fans & Lighting">Fans & Lighting</Link></li>
                    <li><Link to="Water Heater">Water Heater</Link></li>
                    <li><Link to="View All">View All</Link></li>
                </ul>
            </div>
            <div class="bottom_links">
            	<h3>Brands</h3>
                <ul>
                    <li><Link to="pdf/eon_price_list.pdf">Eon Led Lightining</Link></li>
                    <li><Link to="pdf/eon_wire_price_list.pdf">EON Wires</Link></li>
                    <li><Link to="pdf/akg_price_list.pdf">A.K.G</Link></li>
                    <li><Link to="pdf/crabtree_price_list.pdf">Crabtree</Link></li>
                    <li><Link to="pdf/hager_price_list.pdf">Hager</Link></li>
                    <li><Link to="pdf/northwest_price_list.pdf">North West</Link></li>
                </ul>
            </div>
            <div class="bottom_links">
            	<h3>Contact us</h3>
                <ul>
                    <li><i class="fa fa-phone-square" aria-hidden="true"></i> hbelectricals9004@gmail.com</li>
                    <li class="phone"><i class="fa fa-envelope-o" aria-hidden="true"></i> 0124-2970578</li>
                    <li><i class="fa fa-map-marker" aria-hidden="true"></i> A-313, 1st Floor, Palam Vihar Extension Gurgaon Haryana</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
        </div>
        
    )
}
}