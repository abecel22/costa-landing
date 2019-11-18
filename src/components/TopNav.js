import React from 'react';
import { Menu, Icon } from 'antd';
import '../styles/nav.css';

const TopNav = ({ isCollapsed, handleToggle, isNarrow }) => {
  if (!isNarrow) {
    return (
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="title">Costa A Costa</Menu.Item>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="shop">Shop</Menu.Item>
        <Menu.Item key="contact">Contact Us</Menu.Item>
        <Menu.Item key="about">About Us</Menu.Item>
      </Menu>
    );
  }
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item>
        <Icon
          className="trigger"
          type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={handleToggle}
        />
      </Menu.Item>
      <Menu.Item key="title">Costa A Costa</Menu.Item>
    </Menu>
  );
};

export default TopNav;
