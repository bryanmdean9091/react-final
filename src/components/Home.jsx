import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container-fluid home p-0 mt-3">
         <div className="picBox col-3">
         
           <img className="logo " src={require('../media/logo.png')} /> 
           
         </div>  
         
      
      </div>
      <div className=" container enterBox ">
          <div className="enter col-6 ">
            <h1 className="enterText display-2">Fill the Void...</h1>
            <p className="display-4">with more material possesions!</p>
            <button>Shop Now</button>
          </div>
        </div>
        
      
    </>
  );
}

export default Home;
