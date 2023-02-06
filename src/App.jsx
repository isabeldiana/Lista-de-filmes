import React from "react";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";

import "./App.css";

function App() {
  return (
    <>
      <div className="login">
        <h1> Login </h1>
        <form action=" ">
          <div className="input-user">
            <input type="text" placeholder="Usuário" className="user" require />
            <BsPerson color="white" className="icon" />
          </div>
          <div className="input-password">
            <input type="password" placeholder="Password" require />
            <RiLockPasswordLine color="white" className="icon" />
          </div>
          <button type="submit" className="button-login">
            Login
          </button>
          <div className="links">
            <Link to="/"> Esqueci a senha</Link>
            <Link to="/SignUp"> Cadastro</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
