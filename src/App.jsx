import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Trajetoria from './pages/Trajetoria';
import Contato from './pages/Contato';
import './styles/global.css'; // Seu CSS global de reset (body, *, html)

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/trajetoria" element={<Trajetoria />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;