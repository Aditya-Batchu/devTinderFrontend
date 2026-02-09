import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const userData = useSelector((state) => state.user);
  // console.log(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get("http://localhost:3000/profile/view", {
        withCredentials: true,
      });
      // console.log(res);
      dispatch(addUser(res.data));
    } catch (error) {
      // console.log(error);
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
