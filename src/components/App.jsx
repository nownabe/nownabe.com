import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from 'Header';
import Footer from 'Footer';
import Home from 'Home';
import Rubygems from 'Rubygems';
import Tools from 'Tools';
import NotFound from 'NotFound';

import styles from './styles.css';

export default () => (
  <BrowserRouter>
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rubygems" component={Rubygems} />
        <Route path="/tools" component={Tools} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
