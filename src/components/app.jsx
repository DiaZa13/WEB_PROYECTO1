import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './navBar/navBar';
import CollapseProducts from './navBar/collapse/collapseProducts';

function App() {
  return (
    <div>
      <NavBar />
      <h1>testing</h1>
      <div id="products" className="collapse">
        <CollapseProducts />
      </div>
    </div>

  );
}

export default App;
