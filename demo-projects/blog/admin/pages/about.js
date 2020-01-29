import React from 'react';

import { Container } from '@ksjs-ui/layout';
import { Title } from '@ksjs-ui/typography';

const About = () => (
  <Container>
    <Title as="h1" margin="both">
      About
    </Title>
    <p>This is a custom page in the Blog demo project Admin UI.</p>
    <p>
      It demonstrates the ability to add navigation routes that render custom React components, and
      use the KeystoneJS Design System.
    </p>
  </Container>
);

export default About;
