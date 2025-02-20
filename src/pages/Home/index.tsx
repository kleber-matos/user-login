import style from "./style.module.scss";

import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { AiFillCheckCircle } from "react-icons/ai";

export default function index() {
  return (
    <>
      <div className={style.container}>
        <div className={style.container__login}>
          <AiFillCheckCircle className={style.container__login__ok} />

          <h2>Login with success!!</h2>

          <Link className={style.container__button__out} to="/">
            <CiLogout className={style.container__button__icon} />
            Sign out
          </Link>
        </div>
      </div>
    </>
  );
}
