import React, { useState } from 'react';
import Container from './Container';
import Header from './Header'
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHome from '../pages/Home'
import PageEstado from '../pages/Estado'
import PagePontoTuristico from '../pages/PontoTuristico'

function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Router>
      <Header funcOpenSidebar={setOpenSidebar} />
      <Sidebar openSidebar={openSidebar} funcOpenSidebar={setOpenSidebar} />
      <Container>
        <Routes>
          <Route exact path="/" element={<PagePontoTuristico />} />
          {/* <Route exact path="/Estado" element={<PageEstado />} /> */}
          {/* <Route exact path="/PontoTuristico" element={<PagePontoTuristico />} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default Layout;
