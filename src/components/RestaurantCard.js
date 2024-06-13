import { CDN_LINK } from "./utils/content";
const RestaurantCard = (props) => {
    const{resData}=props;
    const{cloudinaryImageId,name,locality,cuisines,avgRating}=resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo"
                alt="res-logo"
                src={CDN_LINK+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{locality}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{"Avgrating:"+ avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;