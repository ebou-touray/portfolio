import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br />I am Ebou, a Full Stack Web Developer
      </SectionTitle>

      <SectionText>
        I build web app using modern technologies: React, JavaScript ES6, Node,
        Mongo.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.linkedin.com/in/ebou-touray-01508116/')
        }
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
