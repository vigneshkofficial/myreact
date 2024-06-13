
import {LOGO_LINK} from "./utils/content.js";
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_LINK} alt="logo" />
            </div>
            <div className="Navitems">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>

            </div>
        </div>
    )
}

export default Header;