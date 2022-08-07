import React from 'react';
import "./styles/app.scss"
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
            <Routes>
                  <Route path='/:id' element={
                      <>
                          <Toolbar/>
                          <SettingBar/>
                          <Canvas/>
                      </>}>
                  </Route>
                  <Route path='*' element={<Navigate to={`f${(+new Date()).toString(16)}`} />}/>
              </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;





