import React, { useEffect, useState } from "react";
import session from "./solidSession";
import "./App.css";
import DataManager from "./components/DataManager";
import LoginScreen from "./components/LoginScreen";

const App = () => {
  const [webId, setWebId] = useState("");
  const [sessionActive, setSessionActive] = useState(false);

  useEffect(() => {
    document.title = "Solid Data Manager";
    if (session.info.isLoggedIn) {
      const w = session.info.webId;
      if (w) {
        setWebId(w);
        setSessionActive(true);
      }
    }
  }, []);

  const loginToSolid = async (issuer) => {
    if (!issuer) return;
    await session.login({
      oidcIssuer: issuer,
      redirectUrl: window.location.href,
      clientName: "Solid Data Manager",
    });
  };

  if (!sessionActive) {
    return (
      <div className="container">
        <LoginScreen onLogin={loginToSolid} />
      </div>
    );
  }

  return (
    <div className="container">
      <DataManager webId={webId} />
    </div>
  );
};

export default App;
