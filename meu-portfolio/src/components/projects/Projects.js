// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { Box, Heading, SimpleGrid, VStack, Image, Text, Link } from '@chakra-ui/react';

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

  &:hover {
    transform: scale(1.05);
  }
`;

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <Heading as="h2" size="lg" mb="4">
        Projetos
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        <ProjectCard>
          <VStack spacing={2}>
            <Image src="/img/dragon.png" alt="Projeto 1" borderRadius="8px" />
            <Heading as="h3" size="md">
              RPG - Dragon Repeller
            </Heading>
            <Text>
            Prepare-se para uma aventura épica no reino mágico de Eldoria, onde dragões ameaçam a paz e a segurança das terras. Em "Dragon Repeller", você assume o papel de um corajoso aventureiro encarregado de proteger o reino dos perigosos dragões que assolam a região.
            </Text>
            <Link href="https://rpg-deployi.vercel.app" color={palette.accent} textDecoration="underline">
              Ver mais
            </Link>
          </VStack>
        </ProjectCard>
      </SimpleGrid>
    </StyledProjects>
  );
};

export default Projects;
