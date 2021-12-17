import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import Hero from '../components/Hero';
import Grid from '../components/Grid';
// import Head from '../components/Head';
import COPY from '../data/copy';
import GlobalStyle from '../styles/main.styled.js';

const Index = ({ user: { fields: user } }) => (
  <>
  <GlobalStyle />
    <div className="container my-4">
      {/* <Head title={`${COPY[user.language].thanks} ${user.name} | Manon & Raffaele`} /> */}
      <Hero />
      <div className="mx-sm-3 px-sm-3 mx-md-5 px-md-5">
        <p className="mt-3 mt-sm-4 mt-md-5">{COPY[user.language].intro}</p>
        <h1 className="mt-2 mb-3 mb-sm-4 font-weight-bold">{COPY[user.language].thanks} {user.name}.</h1>
        <ReactMarkdown className="mb-3 mb-sm-4" source={user.text} />
      </div>
        <Grid images={[user.img_1, user.img_2, user.img_3]} />
      <div className="text-center mb-5 pb-5">
      <Link
        href={{
          pathname: '/',
          query: {
            language: user.language,
          }
        }}
        style={{
          textDecoration: 'none',
        }}
      >
        <button
          type="button"
          className='btn btn-primary btn-lg px-4 button'
        >
          {COPY[user.language].cta}
        </button>
      </Link>

      </div>
    </div>
  </>
);

Index.getInitialProps = async ({ query }) => {
  const res = await fetch(`https://manon-raffaele-api.herokuapp.com/api/users/${query.id}`);
  const user = await res.json();
  return { user };
};

export default Index;
