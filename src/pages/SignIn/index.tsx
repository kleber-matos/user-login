import style from "./style.module.scss";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function index() {
  // Redister
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [text, setText] = useState(false);

  const access = () => {
    const loginSave = localStorage.getItem("login");
    const passwordSave = localStorage.getItem("password");

    if (login === loginSave && password === passwordSave) {
      window.location.replace("/home");
    } else {
      setText(true);
      setTimeout(() => setText(false), 10000);
    }
  };

  return (
    <>
      <div className={style.banner}>
        <h2>Hello & Welcome</h2>
      </div>
      <div className={style.container}>
        <div className={style.container__text}>
          <h2>Sign In</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            eligendi sint iure repellendus illum. Assumenda.
          </p>
        </div>

        <div className={style.container__form}>
          <label>
            <FaUser />
            <input
              placeholder="Login name..."
              type="text"
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>

          <label>
            <FaLock />
            <input
              placeholder="Password..."
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <span style={text ? { color: "red" } : { color: "white" }}>
            Login or password incorrect
          </span>

          <Link className={style.container__form__link} to="/createaccount">
            Create Account
          </Link>

          <button className={style.container__button} onClick={() => access()}>
            Access
          </button>
        </div>
      </div>
    </>
  );
}
