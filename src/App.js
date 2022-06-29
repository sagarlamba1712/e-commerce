
import React from 'react'
import Routing from './Routing/Routing';
 
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Routing/>
      </div>
    )
  }
}

//laksdfjlksadjfklsajdflkjaskdfjoicnvaslkvwjepoirfsanklsdfjslkfd

// import Student from "./Student.js";
// import React from "react";
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       name:"sagar"
//     }
//   }
//   render() {
//     return (
//       <div className="APP">
//         <h1>Props !</h1>
//         <Student name={this.state.name} emailid="sagar@gamil"></Student>
//         <button onClick={()=>this.setState({name:"sahil"})}>Update Name</button>
//       </div>
//     );
//   }
// }



 /* 
import React, {useState,useEffect} from 'react'
export default function App() {
   const [count,setCount] = useState(0);
   const [count1,setCount1] = useState(50);

   const handleIncrement = ()=>{
    setCount(count + 1);
   };

   const handleDecrement =() =>{
   setCount1(count1 - 1);

   }
  
   useEffect(() =>{
    console.log("use Effect Called")
   } ,[count,count1]);

  return (
    <React.Fragment>
  <h1>Count up: {count}  </h1>
  <button type ="button" onClick={handleIncrement}> 
  Increment </button>

  <h1>Count Down: {count1}  </h1>
  <button type ="button" onClick={handleDecrement}> 
  Decrement </button>
    </React.Fragment>
    
  )
}
   */     
