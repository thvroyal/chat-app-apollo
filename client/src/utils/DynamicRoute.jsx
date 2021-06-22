import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from '../context/auth';

export default function DynamicRoute(props) {
  const { user } = useAuthState();
  const { authenticated, guest, component } = props;
  if (authenticated && !user) {
    return <Redirect to="/login" />;
  } if (guest && user) {
    return <Redirect to="/" />;
  } return <Route component={component} {...props} />;
}
