// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function UserWelcome(props) {
  if (props.isLoggedIn) {
    return (
      <div>
        <h1>Welcome back, {props.username}!</h1>
        <p>It's great to see you again.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please sign in</h1>
        <p>You need to log in to view this content.</p>
      </div>
    );
  }
}