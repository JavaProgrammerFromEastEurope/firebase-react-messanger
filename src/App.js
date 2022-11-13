import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Loader } from "./components";
import AppRouter from "./router/app.router";
import Context from "./context";
import { useAuthState } from "react-firebase-hooks/auth";
import "./styles/App.css";


const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
