import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import styled from 'styled-components';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import School from './pages/School';

const SideBarWrapper = styled.div`
  width: 20%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: lightgray;
`;

const ContentWrapper = styled.div`
  padding-left: 10%;
  width: 70%;
  height: 100%;
  left: 20%;
  top:0;
  position: fixed;
`


function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>

        <ContentWrapper>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/school" Component={School} />
          </Routes>
        </ContentWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
