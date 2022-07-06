import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Routes>
              <Route path="/" element={<Sidebar />} />
              <Route
                path="/rooms/:roomId"
                element={
                  <>
                    <Sidebar />
                    <Chat />
                  </>
                }
              />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
