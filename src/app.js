import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainner
 *   -RestaurantCard
 * Footer
 * -copyright
 * -Links
 * -Address
 * -Contact
 *  
 */





                
            
                
    


  



const Footer=()=>{
    return(
        <div className="footer">
            <ul>
                <li>@Copyright : vignesh.k</li>
                <li>Address</li>
                <li>links</li>
                <li>Contact</li>
            </ul>

        </div>
    )
}



const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>;
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);