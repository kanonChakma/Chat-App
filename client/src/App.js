import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import SetAvatar from './pages/SetAvatar';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Chat/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setavatar" element={<SetAvatar />} />
    </Routes>
  </BrowserRouter>
  );
}
