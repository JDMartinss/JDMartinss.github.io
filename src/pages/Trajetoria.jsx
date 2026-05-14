import '../styles/trajetoria.css';

export default function Trajetoria() {
  return (
    <section className="trajetoria">
      <h2 className="heading"><span></span></h2>

      <h3 className="sub-heading">Educação e Formação</h3>
      <div className="timeline-items">
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">1º Semestre - Atual</div>
          <div className="timeline-content">
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p><strong>Instituição:</strong> IFSP</p>
            <p>Busca por formação sólida em desenvolvimento de software e análise de sistemas.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Certificação</div>
          <div className="timeline-content">
            <h3>Implantação de Serviços de Inteligência Artificial em Nuvem</h3>
            <p><strong>Certificação:</strong> Microsoft Al-200 (Senai)</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Cursos e Habilidades</div>
          <div className="timeline-content">
            <h3>Cursos Complementares</h3>
            <p>Excel (Curso em Vídeo - Gustavo Guanabara)</p>
            <p>Edição de Vídeo (Sony Vegas, Capcut) | Edição e Criação de Imagem (Photoshop, Canva)</p>
            <p>Manutenção de PC (Formatação, Reparo e Otimização de Sistemas)</p>
          </div>
        </div>
      </div>

      <h3 className="sub-heading" style={{ marginTop: '50px' }}>Experiência Profissional</h3>
      <div className="timeline-items">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2025 - 2026</div>
          <div className="timeline-content">
            <h3>Almoxarife</h3>
            <p><strong>Empresa:</strong> Jod's Confecções</p>
            <ul>
              <li>Controle e organização de estoque.</li>
              <li>Recebimento, conferência, e separação de mercadorias e pedidos.</li>
              <li>Lançamento de entradas e saídas em sistema.</li>
            </ul>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2025 - 2025</div>
          <div className="timeline-content">
            <h3>Estagiário</h3>
            <p><strong>Empresa:</strong> Antecype Soluções Financeiras</p>
            <ul>
              <li>Comunicação clara e eficiente com clientes via WhatsApp.</li>
              <li>Gestão de propostas de antecipação de FGTS.</li>
              <li>Resolução de questões e problemas durante o processo de antecipação.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}