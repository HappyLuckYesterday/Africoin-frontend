import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../redux/reducers/actionCreators/auth";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    logoutUser(navigate, dispatch);
  }, []);
  return <div></div>;
}

export default Logout;