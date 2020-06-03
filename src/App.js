import React from 'react';
import './App.css';
import {Layout, Navigation, Drawer, Content, Header} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {

  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={
            <a href="/">Umair Khan</a>
        } scroll>
            <Navigation className="navigation-links">
                <Link to="/aboutme">Skills </Link>
                <Link to="/contact">Contact</Link>                
                <Link to="/resume">Resume</Link>                
            </Navigation>
        </Header>
        <Drawer onClick="toggler()" title={
            <a href="/">Umair Khan</a>} className="drawer">
            <Navigation>
                <Link to="/aboutme">Skills</Link>
                <Link to="/contact">Contact</Link>                
                <Link to="/resume">Resume</Link>  
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
    
</div>

  );
}

export default App;
