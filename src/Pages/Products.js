import React from "react"
import {Link} from "react-router-dom"
import Header from '../components/header'
import Footer from '../components/footer'


export default class Products extends React.Component{
    render(){
        return(
            <div class="wrapper">
<Header/>
   <div class="container-fluid">
   		<div class="row">
        	<img src="images/product_banner.jpg"  alt=""/>
        </div>
   </div>
   <div class="container-fluid">
   		<div class="row">
        	<div class="container">
            	<div class="content_page">
                	<div class="left_area">
                    	<div class="product_range">Range</div>
                    	<ul>
                        <li><Link to="pdf/eon_price_list.pdf">Eon Led Lightining</Link></li>
                    <li><Link to="pdf/eon_wire_price_list.pdf">EON Wires</Link></li>
                    <li><Link to="pdf/akg_price_list.pdf">A.K.G</Link></li>
                    <li><Link to="pdf/crabtree_price_list.pdf">Crabtree</Link></li>
                    <li><Link to="pdf/hager_price_list.pdf">Hager</Link></li>
                    <li><Link to="pdf/northwest_price_list.pdf">North West</Link></li>
 
                        </ul>
                    </div>
                    <div class="right_area">
                        <div class="product_logo">EON LED LIGHTINING</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/eon_img1.jpg" alt=""/></div>
                                    <div class="product_title">LED BULBS</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/eon_img2.jpg" alt=""/></div>
                                    <div class="product_title">Slim Panel Series</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/eon_img3.jpg" alt=""/></div>
                                    <div class="product_title">Downlight Seriess</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/eon_img4.jpg" alt=""/></div>
                                    <div class="product_title">Commercial Cob</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="pdf/eon_price_list.pdf">Eon Led Price List Download</a></div>
                        <div class="product_logo">EON Wires</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/eon_img5.jpg" alt=""/></div>
                                    <div class="product_title">PVC INSULATED CABLES</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/eon_img6.jpg" alt=""/></div>
                                    <div class="product_title">PVC INSULATED MULTI CORE CABLES</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/eon_img7.jpg" alt=""/></div>
                                    <div class="product_title">INDOOR TELEPHONE CABLES</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/eon_img8.jpg" alt=""/></div>
                                    <div class="product_title">CO-AXIAL - TV CABLES</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="pdf/eon_wire_price_list.pdf">Eon Led Price List Download</a></div>
                         <div class="product_logo">A.K.G</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/akg_img1.jpg" alt=""/></div>
                                    <div class="product_title">Conduct Pipes</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/akg_img2.jpg" alt=""/></div>
                                    <div class="product_title">Cable Tray</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/akg_img3.jpg" alt=""/></div>
                                    <div class="product_title">Raceways</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/akg_img4.jpg" alt=""/></div>
                                    <div class="product_title">CO-AXIAL - TV CABLES</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="pdf/akg_price_list.pdf">A.K.G Price List Download</a></div>
                        <div class="product_logo">Crabtree</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/crabtree_img1.jpg" alt=""/></div>
                                    <div class="product_title">Touch Switching Solutions</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/crabtree_img2.jpg" alt=""/></div>
                                    <div class="product_title">Electronic Switching Solutions</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/crabtree_img3.jpg" alt=""/></div>
                                    <div class="product_title">Modular Plates - Arctic White</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/crabtree_img4.jpg" alt=""/></div>
                                    <div class="product_title">Switches</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="pdf/crabtree_price_list.pdf">Crabtree Price List Download</a></div>
                                                <div class="product_logo">Hager</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/hager_img1.jpg" alt=""/></div>
                                    <div class="product_title">Distribution Boards</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/hager_img2.jpg" alt=""/></div>
                                    <div class="product_title">Protection Devices</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/hager_img3.jpg" alt=""/></div>
                                    <div class="product_title">Power Interface</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/hager_img4.jpg" alt=""/></div>
                                    <div class="product_title">Lighting Control</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="pdf/hager_price_list.pdf">Hager Price List Download</a></div>
                         <div class="product_logo">North West</div>
                        <div class="product_listing">
                            <ul>
                                <li>
                                    <div class="product_img"><img src="images/northwest_img1.jpg" alt=""/></div>
                                    <div class="product_title">MODULAR SWITCHES</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/northwest_img2.jpg" alt=""/></div>
                                    <div class="product_title">SAFETY DEVICES</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/northwest_img3.jpg" alt=""/></div>
                                    <div class="product_title">VIDEO DOOR PHONES</div>
                                </li>
                                <li>
                                    <div class="product_img"><img src="images/northwest_img4.jpg" alt=""/></div>
                                    <div class="product_title">WIPRO LIGHTING</div>
                                </li>
                            </ul>
                        </div>
                        <div class="pricelist"><a target="_blank" href="pdf/northwest_price_list.pdf">North West Price List Download</a></div>
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