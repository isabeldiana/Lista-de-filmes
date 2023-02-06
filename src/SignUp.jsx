import React from "react";
import { BsArrowLeftCircle, BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./SignUp.css";
function SignUp() {
  return (
    <>
      <div className="SignUp">
        <h1> Cadastro </h1>
        <form action=" ">
          <div className="input-user">
            <input type="email" placeholder="Email" className="user" require />
            <BsPerson color="white" className="icon" />
          </div>
          <div className="input-password">
            <input type="password" placeholder="Digite uma senha" require />
            <RiLockPasswordLine color="white" className="icon" />
          </div>
          <div className="input-password">
            <input
              type="password"
              placeholder="Confirme a senha senha"
              require
            />
            <RiLockPasswordLine color="white" className="icon" />
          </div>
          <button type="submit"> Cadastrar</button>
          <Link to="/">
            <BsArrowLeftCircle />
          </Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
