import React from 'react';
import Error from '../components/Error';

const Page404 = () => (
  <Error code="500" src="/images/500.jpg" alt="three kitten inside a computer">
    Oops, it looks like our paws accidentally unplugged something important. We&apos;ll try to fix it and get back to
    you soon!
  </Error>
);

export default Page404;
