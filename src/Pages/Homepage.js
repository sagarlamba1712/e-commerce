import React from "react"
import {Link} from "react-router-dom"
import Header from '../components/header'
import Footer from '../components/footer'
export default class Homepage extends React.Component{
    render(){
        return(
            <div class="wrapper">
	<Header />
    <div class="container-fluid">
    	<div class="row">
    	<div id="slides">
            <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
            <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
            <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
            <div class="slide"><img src="images/slide01.jpg" alt=""/></div>
        </div>
        </div>
    </div>
    <div class="logo_overlay">
    	<div class="container">
        	<div class="client_logo">
            	<ul>
                	<li><a target="_blank" href="pdf/eon_price_list.pdf"><img src="images/eon.png" alt=""/></a></li>
                    <li><a target="_blank" href="pdf/hager_price_list.pdf"><img src="images/hageer.png" alt=""/></a></li>
                    <li><a target="_blank" href="pdf/akg_price_list.pdf"><img src="images/akg.jpg" alt=""/></a></li>
                    <li><a target="_blank" href="pdf/crabtree_price_list.pdf"><img src="images/crabtree.jpg" alt=""/></a></li>
                    <li><a target="_blank" href="pdf/northwest_price_list.pdf"><img src="images/northwest.jpg" alt=""/></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-fluid">
    	<div class="row">
    	<div class="container">
        	<ul class="home_banners">
            	<li><img src="images/air_purifieer.jpg" alt=""/></li>
                <li><img src="images/food_preperation.jpg" alt=""/></li>
            </ul>
        </div>
        </div>
    </div>
    <div class="container-fluid">
    	<div class="row">
    	<div class="container">
        	<div class="feat_prod">
        	<h2>FEATURED PRODUCTS</h2>
            <h6>Our Fantastic range of Havels, Eon, ligman & Hager products</h6>
            </div>
            <div class="home_products">
            	<ul>
                	<li>
                    	<div class="product_img"><img src="images/prodimg_1.jpg" alt=""/></div>
                        <div class="product_title">switches</div>
                        <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                        <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </li>
                    <li>
                    	<div class="product_img"><img src="images/prodimg_2.jpg" alt=""/></div>
                        <div class="product_title">Bulb</div>
                        <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                        <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </li>
                    <li>
                    	<div class="product_img"><img src="images/prodimg_3.jpg" alt=""/></div>
                        <div class="product_title">Conduct Pipes</div>
                        <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                        <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </li>
                    <li>
                    	<div class="product_img"><img src="images/prodimg_4.jpg" alt=""/></div>
                        <div class="product_title">Downlight Seriess</div>
                        <div class="product_desc">A combination of elegance, simplicity and sophistication </div>
                        <div class="explore"><a href="product-range.html">Explore <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
                    </li>
                </ul>
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