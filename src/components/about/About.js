import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { css } from '@emotion/react';

const palette = {
  primary: '#0F0F0F',
  secondary: '#232D3F',
  accent: '#005B41',
  highlight: '#008170',
};

const StyledAboutMe = styled(Box)`
  background-color: ${palette.primary};
  color: ${palette.highlight};
  padding: 4;
  margin-bottom: 8;
  text-align: center;
`;

const EmotionAboutMe = styled(Box)`
  ${({ theme }) => css`
    background-color: ${theme.colors[palette.primary]};
    color: ${theme.colors[palette.highlight]};
    padding: 4;
    margin-bottom: 8;
    text-align: center;
  `}
`;

const Frame = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border: 5px solid ${palette.accent};
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(10px);
  }

  @media only screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media only screen and (min-width: 992px) {
    width: 250px;
    height: 250px;
  }
`;

const AboutMe = () => {
  return (
    <StyledAboutMe id="about">
      <Heading as="h2" size="lg" mb="4">
        Sobre Mim
      </Heading>
      <Frame>
        <Image src="/img/eu.JPG" alt="Sua Foto" borderRadius="50%" />
      </Frame>
      <Text mt="4">
        Oi, eu sou o Juliano Amaral Costa, natural de São Paulo e atualmente morando em Guarujá. Minha jornada é tão diversificada quanto eu, combinando minha paixão por música, meu amor pela história e minha empolgante transição para o mundo da programação.

        Desde pequeno, meu interesse por computadores já se destacava. Lembro-me de explorar meu iMac G3 nos anos 90, quando a informação não era tão acessível. A necessidade de desbravar esse universo me levou a fóruns online, onde aprendi a aprimorar meu conhecimento e até mesmo a "mexer os pauzinhos" para conseguir jogar, seja por meio de downloads de Torrent ou crackeando jogos.

        Minha trajetória na música começou em 2005, participando de projetos autorais que evoluíram ao longo dos anos. Desde 2012, faço parte do Old Rust, uma banda de punk enraizada no Guarujá, onde a expressão artística e a energia do palco se tornaram uma parte vital da minha identidade.

        Além disso, sou professor de História para alunos do sexto ano, compartilhando minha paixão pelo passado e inspirando jovens mentes a apreciarem a narrativa humana ao longo dos séculos.

        Minha mais recente aventura envolveu uma imersão total na programação. Nos últimos dezoito meses, tenho me dedicado a aprender diversas linguagens e entender os intricados processos de desenvolvimento. Concluí um Bootcamp na Labenu e continuo me aprimorando no FreeCodeCamp, sempre buscando aprender e crescer.

        Desde 2016, sou Gaudiya Vaishnava, tendo me abrigado aos pés de lótus do meu mais amado Gurudev Srila Bhaktivedanta Vana Maharaja.

        Cada capítulo da minha história contribui para quem sou, um cara apaixonado por desafios, aprendizado constante e pela busca incansável de conhecimento em todas as suas formas. Vamos explorar esse caminho juntos! 🚀
      </Text>
    </StyledAboutMe>
  );
};

export default AboutMe;
