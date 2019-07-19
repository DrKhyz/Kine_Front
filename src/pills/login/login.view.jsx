import React from "react";
import "./login.scss";

let errorMessageStyle = { fontSize: "12px", color: "red", border: "none" };

const LOGIN_PLACEHOLDER = "Identifiant";
const PASSWORD_PLACEHOLDER = "Mot de passe";

const switchErrorMessage = statusCode => {
  switch (statusCode) {
    case 400:
      return "Identifiant ou mot de passe incorrect";
    case 403:
      return "l'utilisateur n'est pas admin";
    default:
      return "";
  }
};

const loginView = ({ onSubmit, logo, statusCode }) => {
  let errorMessage = switchErrorMessage(statusCode);
  return (
    <div className="loginPage">
      <section className="logo">
        <img src={logo} alt="logo" />
        <h1>UP Day</h1>
        <h2>Calendrier Mictionnel</h2>
      </section>
      <form onSubmit={e => onSubmit(e)}>
        <input name="username" type="text" placeholder={LOGIN_PLACEHOLDER} />
        <input
          name="password"
          type="password"
          placeholder={PASSWORD_PLACEHOLDER}
        />
        <input type="submit" value="Se connecter" />
        <div style={errorMessageStyle}>
          <p>{errorMessage}</p>
        </div>
      </form>
    </div>
  );
};

export default loginView;
