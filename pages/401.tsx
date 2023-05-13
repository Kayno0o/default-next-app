import React from 'react';
import Error from '../components/Error';

const Page401 = () => (
  <Error code="401" src="/images/401.jpg" alt="cat in a police uniform">
    Looks like you&apos;re trying to access something you&apos;re not purr-mitted to
  </Error>
);

export default Page401;
