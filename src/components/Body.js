import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import reslist from "./utils/mockdata";



const Body = () => {
    
   const [lor,setlistofrest]=useState(reslist);
    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn"
               onClick={()=> {
                const filterlogic=lor.filter(
                    (res)=>res.info.avgRating > 4.2
                
                );
              
                setlistofrest(filterlogic);
                console.log(filterlogic);
              }}>Top Rated Restaurants</button>
              

            </div>
            <div className="res-container">
                {
                    lor.map((resturant) => <RestaurantCard key={resturant.info.id} resData={resturant} />)
                }
                    
            </div>

        </div>
    )
}

export default Body;