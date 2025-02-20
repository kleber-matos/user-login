import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import PrivateRouter from "./PrivateRouter";
import CreateAccount from "../pages/CreateAccount";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/home" element={<PrivateRouter Component={Home} />} />
      </Routes>
    </BrowserRouter>
  );
}
