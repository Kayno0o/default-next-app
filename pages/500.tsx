import React from 'react';
import Error from '../components/Error';

const Page404 = () => (
  <Error code="500" src="/500.jpg">
    Oops, it looks like our paws accidentally unplugged something important. We&apos;ll try to fix it and get back to
    you soon!
  </Error>
);

export default Page404;
