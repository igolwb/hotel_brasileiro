import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './HomePage.css';
import divisao from '../../assets/Divisão.svg';
// Importe as novas imagens para as experiências
import hora1 from '../../assets/hora1.svg';
import hora2 from '../../assets/hora2.svg';
import hora3 from '../../assets/hora3.svg';
import hora4 from '../../assets/hora4.svg';
import hora5 from '../../assets/hora5.svg';
import linha4 from '../../assets/linha4.svg';
import rooms from '../../data/rooms';


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
};

// Array de experiências
const experiences = [
  {
    image: hora1,
    title: 'Alvorada Secreta',
    time: '04h30 – 06h00',
    description: 'Um pacto com a madrugada. Seguiremos, em silêncio, até o forno de barro onde o pão nasce sob as últimas estrelas.'
  },
  {
    image: hora2,
    title: 'Anoitecer em Vértice',
    time: '16h00 – 18h00',
    description: 'Uma jornada baseada em uma pergunta que você nos fizer ao chegar. Exemplo: “O que há no pé das pedras?” A resposta virá em forma de trilha, jantar e um objeto misterioso.'
  },
  {
    image: hora3,
    title: 'Meio-Dia de Redemoinho',
    time: '11h30 – 12h30',
    description: 'Deite-se na rede suspensa sobre o rio e deixe que o vento escute o indivíduo. Opções: “Grande Serão-Vertedouro” sussurrado, passeio de Manoel de Barro, código Morse, ou o canto das cigarras em loop infinito.'
  },

  //alguem faz algum texto e horario p hora4 e 5 pfv --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  {
    image: hora4,
    title: 'Meio-Dia de Redemoinho',
    time: '11h30 – 12h30',
    description: 'Deite-se na rede suspensa sobre o rio e deixe que o vento escute o indivíduo. Opções: “Grande Serão-Vertedouro” sussurrado, passeio de Manoel de Barro, código Morse, ou o canto das cigarras em loop infinito.'
  },
  {
    image: hora5,
    title: 'Meio-Dia de Redemoinho',
    time: '11h30 – 12h30',
    description: 'Deite-se na rede suspensa sobre o rio e deixe que o vento escute o indivíduo. Opções: “Grande Serão-Vertedouro” sussurrado, passeio de Manoel de Barro, código Morse, ou o canto das cigarras em loop infinito.'
  }
];

// Carousel settings for experiences (similar to rooms)
const experiencesSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
};


const GuestPage = () => (
  <div>
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Aqui, o relógio se rende ao <br /> seu compasso
        </h1>
        <p>Um hotel que é menos lugar, mais estado de espírito</p>
      </div>
    </section>

    <img src={divisao} alt="Divisao" className="divisao" />

    {/* Rooms Section */}
    <section id="quartos" className="rooms-section">
      <div className="rooms-stripes"></div>
      <div className="rooms-content">
        <h2>Quartos</h2>
        <p>Onde o sono vira ritual</p>
        <Slider {...settings}>
          {rooms.map((room, idx) => (
            <div className="room-card" key={idx}>
              <img src={room.image} alt={room.title} className="room-image" />
              <div className="room-info">
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <ul>
                  {room.details.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <Link to={`/reserve/${room.id}`} className="reserve-btn">Detalhes</Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>

    {/* Experiences Section */}
    {/* Experiences Section as Carousel */}
    <section id="experiencias" className="experiences-section">
      <div className="experiences-content">
        <h2>Programamos encontros com o inesperado</h2>
        <p>Aqui, até o ócio tem roteiro.</p>
        <Slider {...experiencesSettings}>
          {experiences.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              <img src={exp.image} alt={exp.title} className="experience-image" />
              <div className="experience-overlay">
                <div className="experience-time">Horário<br />{exp.time}</div>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <img src={linha4} alt="Divisor" className="wave-divider" />
    </section>
  </div>
);

export default GuestPage;