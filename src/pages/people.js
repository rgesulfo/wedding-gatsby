import React from 'react';
import { Link } from 'gatsby';
// import Head from '../components/Head';
import GlobalStyle from '../styles/main.styled.js';

const renderList = users => users.map(user => (
  <Link
    href={{
      pathname: '/merci',
      query: {
        qui: user.fields.url,
        id: user.id,
      }
    }}
    key={user.id}
  >
    <a target="_blank">{user.fields.name}</a>
  </Link>
));

const People = ({ users }) => (
  <>
  <GlobalStyle />
    <div className="container d-flex flex-column">
      {/* <Head title="People" /> */}
      <h1>People</h1>
      {renderList(users)}
    </div>
  </>
);

People.getInitialProps = async () => {
  const res = await fetch('https://manon-raffaele-api.herokuapp.com/api/users');
  const users = await res.json();
  return { users };
};

export default People;
