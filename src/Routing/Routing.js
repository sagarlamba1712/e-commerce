import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Homepage from "../Pages/Homepage"
import WhoWeAre from "../Pages/WhoWeAre"
import Products from "../Pages/Products"
import Enquiry from "../Pages/Enquiry";
import ContactUs from "../Pages/ContactUs";
export default  class Routing extends React.Component  {
  render(){
    return(
      <div>
      <Router>
        <Routes>
      <Route path= "/" element={<Homepage/>}/>
      <Route exact path="/whoweare" element={<WhoWeAre/>}/>
     <Route exact path="/products" element={<Products/>}/>
     <Route exact path="/enquiry" element={<Enquiry/>}/>
     <Route exact path="/contacts" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
    )
  }
}
