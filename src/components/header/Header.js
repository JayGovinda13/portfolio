// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Heading, Link as ChakraLink, Spacer, UnorderedList, ListItem } from '@chakra-ui/react';
import { css } from '@emotion/react';

const palette = {
  primary: '#0F0F0F',
  secondary: '#232D3F',
  accent: '#005B41',
  highlight: '#008170',
};

const StyledHeader = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.secondary};
  color: ${palette.highlight};
  padding: 4;
  font-family: 'Roboto', sans-serif;
`;

const EmotionHeader = styled(Flex)`
  ${({ theme }) => css`
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors[palette.secondary]};
    color: ${theme.colors[palette.highlight]};
    padding: 4;
    font-family: 'Roboto', sans-serif;
  `}
`;

const StyledLink = styled(ChakraLink)`
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: ${palette.accent};
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeader as="header" wrap="wrap" mb={4} p={4}>
        <Box flex="1">
          <Heading as="h1" size="md">
            Juliano Amaral
          </Heading>
        </Box>
        <Spacer />
        <UnorderedList
          listStyleType="none"
          display={{ base: 'none', md: 'flex' }} // Oculta na tela pequena e exibe em telas maiores
          justifyContent="space-around"
          flex="1"
        >
          <ListItem>
            <StyledLink href="#about">Sobre Mim</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="#blog">Blog</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="#projects">Projetos</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="#contact">Contato</StyledLink>
          </ListItem>
        </UnorderedList>
      </StyledHeader>
    </>
  );
};

export default Header;
