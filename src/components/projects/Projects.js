// src/components/Projects.js
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
  height: 400px; /* Defina uma altura fixa para ambos os cartões */

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled(Image)`
  width: 100%; /* Garante que a imagem ocupe 100% da largura do contêiner */
  height: 200px; /* Altura fixa para todas as imagens */
  object-fit: cover; /* Mantém a proporção da imagem e corta se necessário */
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
              Prepare-se para uma aventura épica no reino mágico de Eldoria, onde dragões ameaçam a paz e a segurança das terras. Em "Dragon Repeller", você assume o papel de um corajoso aventureiro encarregado de proteger o reino dos perigosos dragões que assolam a região.
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
              Bem-vindo à Biblioteca Online, sua plataforma centralizada para explorar e gerenciar sua coleção de livros. Organize seus títulos favoritos, descubra novas obras, e acompanhe suas leituras de maneira eficiente. Nossa aplicação de acervo de livros oferece recursos intuitivos, permitindo que você adicione, categorize e avalie cada livro. Explore categorias diversas, desde ficção até não-ficção, e compartilhe recomendações com outros amantes da leitura. A Biblioteca Online é sua ferramenta definitiva para criar, expandir e desfrutar do seu acervo literário de maneira simples e personalizada.
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
