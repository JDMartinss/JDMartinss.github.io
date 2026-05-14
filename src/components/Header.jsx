import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/" class="logo">JDMartinss</Link>
      <nav>
        <NavLink to="/" end>Início</NavLink> 
        <NavLink to="/projetos">Projetos</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/trajetoria">Trajetória</NavLink>
      </nav>
    </header>
  );
}