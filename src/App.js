
import React from 'react';
import './App.css';
import MovieHots from './Components/MoviesHot';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar,Nav, Form} from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MovieNewReleases from './Components/MoviesNewRel';
import {VscMenu} from 'react-icons/vsc';
import MainPage from './Components/MainPage';


function App() {
  return (
   
      <Router>
    <div><Navbar bg="dark" expand="lg" variant='light' >
<Container fluid >
          <div className='navbar-logo-container'>
            <span className='navbar-logo-text'>TheMovieDB</span>
          </div>
        <Nav className='m-auto'>
        <Navbar.Brand href="/new" style={{color:'white'}}>New Releases</Navbar.Brand>
        <Navbar.Brand href="/hot" style={{color:'white'}}>What's Hot</Navbar.Brand>
        <Form>
        <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
        </Form>
        </Nav>
          <VscMenu className='menu' >
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/new">New Releases</Nav.Link>
                <Nav.Link href="/hot">What's Hot</Nav.Link>
              </Nav> */}
            {/* </Navbar.Collapse> */}
            
          </VscMenu>

        </Container>
</Navbar>
    <div>
    <Routes>
     <Route path="/" element={<MainPage/>}/>
     <Route path="/new" element={<MovieNewReleases/>}/>
     <Route path="/hot" element={<MovieHots/>}/>
    </Routes>
    </div>
    <div><Navbar expand="lg" className='navbar-footer'>
    <div className='navbar-footer-container'>
            <span className='navbar-footer-text'>upGrad | Frontend React Hackthon3</span>
          </div>
    </Navbar>
    </div>
  </div>
</Router>
  
  );
}

export default App;