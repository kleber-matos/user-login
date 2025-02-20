import { Navigate } from "react-router-dom";

interface PrivateRouterProp {
  Component: React.ElementType;
}

const isAuthenticated = () => {
  return localStorage.getItem("login");
};

export default function PrivateRouter({ Component }: PrivateRouterProp) {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
}
