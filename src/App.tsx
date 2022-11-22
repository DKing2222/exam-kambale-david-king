import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import keysUserContext from "./context/AppContext";
import { refresToken } from "../src/store/actions/authActions";

function App() {
  const dispatch = useDispatch();
  //
  const [keysUser] = useState({
    Uid: "",
    entite: "",
    fonction: ""
  });

  useEffect(() => {
    dispatch(refresToken());
  }, []);

  return (
    <div>
      <keysUserContext.Provider value={keysUser}>
        <Routes />
      </keysUserContext.Provider>
    </div>
  );
}

export default App;
