import React from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Home from "../screens/HomeScreen";
import LoginPage from "../screens/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { login } from "../reducers/auth";
import useAppHook from "./useAppHook";
import { TypeLoader } from "../reducers/common";
import FullScreenLoader from "../components/fullscreen-loader";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state: RootState) => state.auth.isLoggedIn);
  const { loader } = useAppHook();


  const handleLogin = () => {
    dispatch(login(''));
  };

  return (
    <div className="app">
      {loader(TypeLoader.GENERAL) && <FullScreenLoader />}
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage  onLogin={handleLogin}/>} />
            <Route
              path="/home"
              element={logged ? <Home /> : <Navigate to="/" />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
