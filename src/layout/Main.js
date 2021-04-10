import React from 'react';
import { Switch, Route } from "react-router";
import { FaBars } from 'react-icons/fa';
import Items from '../views/Items';
import Home from '../views/Home';
import Header from '../components/Header.component';
import Footer from '../components/Footer.component'
const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  return (
    <main style={{backgroundColor:'#dbd7d7'}}>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <div>
        <Header />
      </div>
    
      <div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/items" component={Items} />         
        
        </Switch>

      </div>
      <div style={{ paddingTop : 10, margin:20}}>
      <Footer />
      </div>
    </main>
  );
};

export default Main;
