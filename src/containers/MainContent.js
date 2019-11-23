import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IconColumns from '../components/IconColumns';
import AboutUs from '../components/AboutUs';
import Shop from './Shop';
import ContactUs from './ContactUs';
import '../styles/main.css';

const Home = () => {
  return (
    <>
      <div className="banner" />
      <IconColumns />
    </>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={AboutUs} />
      </Switch>
    </div>
  );
};

export default MainContent;
