import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import Image from 'next/image';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <Image src="/ebou.png" alt="my-photo" width="150" height="150" />
      <SectionTitle main center>
        Hello there, <br />I am Ebou, a Full Stack Web Developer
      </SectionTitle>

      <SectionText>
        I build web app using modern technologies: React, JavaScript ES6, Node,
        Mongo.
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;