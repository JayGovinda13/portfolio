import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  const palette = {
    primary: '#0F0F0F',
    accent: '#005B41',
    highlight: '#008170',
  };

  return (
    <Box
      as="footer"
      backgroundColor={palette.primary}
      color={palette.highlight}
      textAlign="center"
      py="4"
      bottom="0"
      width="100%"
    >
      <Text>&copy; {new Date().getFullYear()} Feito por Juliano Amaral. Todos Direitos Reservados</Text>
    </Box>
  );
};

export default Footer;
