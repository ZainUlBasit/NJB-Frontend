import React, { useEffect, useRef } from "react";
import SideMenu from "./SideMenu";
import main_logo from "../../assets/images/main_logo.png";
import Avatar from "./images/Avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { isactiveMenu } from "../../store/SideMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import NavbarStyled from "./Styling/NavbarStyled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EnhancedEncryptionRoundedIcon from "@mui/icons-material/EnhancedEncryptionRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import SecurityIcon from "@mui/icons-material/Security";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { isOpenModal } from "../../store/CPSlice";

const Navbar = () => {
  const isActive_ = useSelector((state) => state.SideMenuReducer.ActiveState);
  const dispatch = useDispatch();
  const [isDropActive, setIsDropActive] = useState(false);
  const dropDownRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", closeDropDown, true);
  }, []);

  const closeDropDown = (e) => {
    try {
      if (dropDownRef.current.contains(e.target)) {
        setIsDropActive(true);
      } else {
        setIsDropActive(false);
      }
    } catch (error) {}
  };

  return (
    <NavbarStyled>
      <div className="topSide">
        {/* left side */}
        <div className="leftSide">
          <FontAwesomeIcon
            icon={isActive_ ? faMultiply : faBars}
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              color: "#032248",
              width: "30px",
            }}
            onClick={() => dispatch(isactiveMenu())}
          />
          <Link to="/">
            <img
              src={main_logo}
              width="250px"
              className="select-none"
              alt="not found"
            />
          </Link>
        </div>
        {/* Right side */}
        <div className="rightSide">
          <div className="mainBox  overflow-hidden">
            <button
              className="bg-[#032248] text-white w-[40px] h-[40px] rounded-full"
              onClick={() => setIsDropActive((isDropActive) => !isDropActive)}
              ref={dropDownRef}
              id="DropDownBtn"
            >
              {isDropActive ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </button>
          </div>
        </div>
        {isDropActive ? (
          <div className="DropDownList">
            <ul ref={dropDownRef}>
              <li>
                <div className="LinkIcon">
                  <EnhancedEncryptionRoundedIcon />
                </div>
                <div
                  className="LinkTextB select-none"
                  // onClick={() => dispatch(isOpenModal())}
                >
                  Change Password
                </div>
              </li>
              <li>
                <div className="LinkIcon">
                  <SecurityIcon />
                </div>
                <div className="LinkTextB select-none">
                  <Link to="/permissions">Permissions</Link>
                </div>
              </li>
              <li>
                <div className="LinkIcon">
                  <SecurityIcon />
                </div>
                <div className="LinkTextB select-none">
                  <Link to="/requests">Requests</Link>
                </div>
              </li>
              <li>
                <div className="LinkIcon">
                  <LogoutIcon />
                </div>
                <div className="LinkTextB select-none">Logout</div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      {/* Side Menu List */}
      <div className={isActive_ ? "visible_" : "invisible_"}>
        {isActive_ ? <SideMenu /> : null}
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
