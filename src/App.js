import React from 'react';
import './App.css';
import SidebarContainer from './components/sidebar-container/SidebarContainer';
import BodyContainer from "./components/body-container/BodyContainer";


function App() {


  return (
    <div className="App">
      <SidebarContainer />
      <BodyContainer />
    </div>
  );
}

export default App;