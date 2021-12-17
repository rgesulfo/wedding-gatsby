import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Hero from '../components/Hero';
import COPY from '../data/copy';
import GlobalStyle from '../styles/main.styled.js';

const Section = ({ title, img, url, credit, cta }) => (
  <div>
    <h2 className="mt-4 mb-3 font-weight-bold">{title}</h2>
    <GatsbyImage
      className="img-fluid w-100"
      image={getImage(img)}
      alt="Manon &amp; Raffaele"
    />
    <a
      href={`http://bit.ly/${url}`}
      target="_blank"
      style={{
        textDecoration: 'none',
      }}
    >
      <button type="button" className='btn btn-primary btn-lg px-4 button buttonOffset'>
        {cta}
      </button>
    </a>
    {credit && <p className="small text-muted text-center" style={{ marginTop: -8 }}>Photo Credit: {credit}</p>}
  </div>
);

const Index = ({
  language = 'EN',
}) => (
  <>
  <GlobalStyle />
    <div className="container mt-3 mb-5">
      {/* <Head title="Manon &amp; Raffaele" /> */}
      <h1 className="mb-4 font-weight-bold">Manon &amp; Raffaele</h1>
      <div className="videoResponsive">
        <iframe
          src="https://www.youtube.com/embed/KBpFz674ptQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="small text-muted text-center mt-2">{COPY[language].thanks} Adri &amp; Lucie</p>
  {console.log(COPY)}
      <Section
        title={COPY[language].sections[0]}
        img="perfect-day"
        url="our--perfect--day"
        credit="Delphine Leriche"
        cta={COPY[language].cta1}
      />
      <Section
        title={COPY[language].sections[1]}
        img="getting-ready"
        url="getting--ready"
        cta={COPY[language].cta1}
      />
      <Section
        title={COPY[language].sections[2]}
        img="wedding-sf"
        url="wedding-san-francisco"
        credit="Paige Coluccio"
        cta={COPY[language].cta1}
      />
      <Section
        title={COPY[language].sections[3]}
        img="engagement-california"
        url="engagement-in-california"
        credit="Paige Coluccio"
        cta={COPY[language].cta1}
      />
    </div>
    </>
);

export default Index;
