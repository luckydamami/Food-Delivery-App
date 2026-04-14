import "./Navbar.css";
import { assets } from "../../admin_assets/assets.js";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};
