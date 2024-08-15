import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = ({ username, onLogout }) => {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="home">
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About Us</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact Us</Link>
      </Menu.Item>
      <Menu.Item
        key="username"
        style={{ marginLeft: "auto", marginRight: "0" }}
      >
        {username}
      </Menu.Item>
      <Menu.Item
        key="logout"
        style={{ marginLeft: "0", marginRight: "10px" }}
        onClick={onLogout}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
