// import { useState } from 'react'

// import './App.css'
// import TaskDashboard from './components/TaskDashboard'
// import Login from './components/Login'

// function App() {
  

//   return (
//     <>
//       <TaskDashboard />
//       <Login />
      
//     </>
//   )
// }

// export default App

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CallbackPage from "./components/CallbackPage";
import ProtectedPage from "./components/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./auth/AuthenticationGaurd";

const App: React.FC = () => {

  const {isLoading} = useAuth0();
  
  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route 
        path="/protected"
        element={<AuthenticationGuard component={ProtectedPage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;