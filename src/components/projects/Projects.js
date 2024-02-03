import React from 'react';
import styled from 'styled-components';
import { Box, Heading, HStack, VStack, Image, Text, Link } from '@chakra-ui/react';

const palette = {
  primary: '#0F0F0F',
  secondary: '#232D3F',
  accent: '#005B41',
  highlight: '#008170',
};

const StyledProjects = styled(Box)`
  background-color: ${palette.secondary};
  color: ${palette.highlight};
  padding: 4;
  margin-bottom: 8;
  text-align: center;
`;

const ProjectCard = styled(Box)`
  background-color: ${palette.primary};
  padding: 4;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  width: 100%; /* Largura total do contêiner */

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: auto; /* Ajusta automaticamente a altura em proporção à largura */
  object-fit: cover;
  border-radius: 8px;
`;

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <Heading as="h2" size="lg" mb="4">
        Projetos
      </Heading>
      <HStack spacing={8} justify="center">
        <ProjectCard>
          <VStack spacing={2}>
            <ProjectImage src="/img/dragon.png" alt="Projeto 1" />
            <Heading as="h3" size="md">
              RPG - Dragon Repeller
            </Heading>
            <Text>
              {/* Conteúdo do projeto */}
            </Text>
            <Link href="https://rpg-deployi.vercel.app" color={palette.accent} textDecoration="underline">
              Ver mais
            </Link>
          </VStack>
        </ProjectCard>

        <ProjectCard>
          <VStack spacing={2}>
            <ProjectImage src="/img/acervo.png" alt="Projeto 2" />
            <Heading as="h3" size="md">
              Acervo de livros
            </Heading>
            <Text>
              {/* Conteúdo do projeto */}
            </Text>
            <Link href="https://labecommerce-cx15.vercel.app" color={palette.accent} textDecoration="underline">
              Ver mais
            </Link>
          </VStack>
        </ProjectCard>
      </HStack>
    </StyledProjects>
  );
};

export default Projects;
