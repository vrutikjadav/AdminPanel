import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import ProfileImg from "../../assets/images/Image.png";

const Header = () => {
  return (
      <div className="headerComponent">
        {/* Search Bar */}
        <div className="searchBar">
          <div className="input-group">
            <span className="input-group-text" id="addon-wrapping">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              className="form-control searchInput"
              placeholder="Search"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        {/* Notification Icon  */}
        <div className="ProfileSection">
          <div>
            <FontAwesomeIcon icon={faBell} className="BellIcon" />
          </div>
          {/* Profile detials */}
          <div className="profileDetails">
            <div className="profileDescription">
              <span className="StoreName">Puma Offical Store</span>
              <span className="changeSeller">change seller</span>
            </div>
          </div>
          {/* Profile Image */}
          <div>
            <img src={ProfileImg} className="ProfileImg" />
          </div>
        </div>
      </div>
  );
};

export default Header;
