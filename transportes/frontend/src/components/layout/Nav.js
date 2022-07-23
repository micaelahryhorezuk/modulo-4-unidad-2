import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';

const Nav = () => {
  return (
    <nav>
      <div>
        <ul>
          <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
          <li><NavLink activeClassName="activo" exact to="/novedades">Novedades</NavLink></li>
          <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
          <li><NavLink activeClassName="activo" exact to="/layout-basico">Layout Basico</NavLink></li>
          {/* <li><Link to="/servicios">Servicios</Link></li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;