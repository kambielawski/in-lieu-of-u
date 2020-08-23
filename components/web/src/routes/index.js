import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from '../screens/HomeScreen';
import BlogScreenScreen from '../screens/BlogScreen';
import LinksScreen from '../screens/LinksScreen';
import BlogPostScreen from '../screens/BlogPostScreen';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/blog" exact component={BlogScreenScreen} />
      <Route path="/links" exact component={LinksScreen} />
      <Route path="/blog/:url" exact component={BlogPostScreen} />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={HomeScreen} />
    </Switch>
  );
}