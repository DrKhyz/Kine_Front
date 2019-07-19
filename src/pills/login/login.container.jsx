import React from "react";
import LoginView from "./login.view.jsx";
import { checkUserCredentials } from "./login.actions.js";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import logoKineOrange from "./logoKineOrange.png";
import {
  getStatusCodeSelector,
  getUuidSelector
} from "../login/login.selectors";

const Login = ({ dispatch, userUuid, statusCode }) => {
  const handleSubmit = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    dispatch(checkUserCredentials(username, password));
  };

  if (userUuid && localStorage.getItem("user")) {
    return <Redirect to="/history" />;
  }

  return (
    <LoginView
      onSubmit={handleSubmit}
      logo={logoKineOrange}
      statusCode={statusCode}
    />
  );
};

const mapStateToProps = state => ({
  userUuid: getUuidSelector(state),
  statusCode: getStatusCodeSelector(state)
});

export default connect(mapStateToProps)(Login);
