import React from 'react';
import Container from '../components/base/Container';
import H1 from '../components/base/H1';
import Button from '../components/base/Button';
import useToast from '../hooks/useToast';

const Home = () => {
  const { addToast } = useToast();

  return (
    <>
      <Container>
        <H1>blblbl</H1>
        <Button onClick={() => addToast('test trop cool', 'error')}>add toast</Button>
      </Container>
    </>
  );
};

export default Home;
