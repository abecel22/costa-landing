import React from 'react';
import { Menu } from 'antd';

const SideNav = () => {
  return (
    <>
      <Menu theme="dark" mode="vertical">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="shop">Shop</Menu.Item>
        <Menu.Item key="contact">Contact Us</Menu.Item>
        <Menu.Item key="about">About Us</Menu.Item>
      </Menu>
    </>
  );
};

export default SideNav;
