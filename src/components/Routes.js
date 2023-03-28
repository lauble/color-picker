import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Collection from './Collection';
import Home from './Home';

export default function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/collection" element={<Collection/>}></Route>
        </Routes>
    </div>
  )
}
