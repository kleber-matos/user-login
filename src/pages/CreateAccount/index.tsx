import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function index() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [count, setCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && count < 10) {
      const timer = setTimeout(() => setCount(count + 1), 200);
      return () => clearTimeout(timer);
    }
    if (count == 10) {
      window.location.replace("/");
    }
  }, [count, isRunning]);

  const clock = () => {
    setCount(1);
    setIsRunning(true);
  };

  const save = () => {
    if (login == "" || password == "") {
      // alert("test");
    } else {
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
      clock();
    }

    console.log("save a acconut");
  };

  const resetLogin = () => {
    localStorage.clear();
    alert("Reset login");
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.container__text}>
          <h2>Create an account</h2>
          <p>REGISTER - Private Router with LocalStorage</p>
        </div>

        <div className={style.container__form}>
          <label>
            <FaUser />
            <input
              required
              placeholder="Name"
              onChange={(e) => setLogin(e.target.value)}
              type="text"
            />
          </label>

          <label>
            <FaLock />
            <input
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              type="text"
            />
          </label>

          <button
            className={style.container__form__link}
            onClick={() => resetLogin()}
          >
            Reset Login
          </button>

          <span> {isRunning ? `redirected on ${count}` : ""} </span>
          <button className={style.container__button} onClick={() => save()}>
            Save
          </button>
        </div>

        <Link className={style.container__form__back} to="/">
          <IoReturnUpBackOutline />
          back
        </Link>
      </div>
    </>
  );
}
