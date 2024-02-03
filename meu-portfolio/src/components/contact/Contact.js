import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Text, Link as ChakraLink, List, ListItem, Icon } from '@chakra-ui/react';
import { EmailIcon, ExternalLinkIcon, PhoneIcon } from '@chakra-ui/icons';

const palette = {
  primary: '#0F0F0F',
  accent: '#005B41',
  highlight: '#008170',
};

const StyledContact = styled(Box)`
  background-color: ${palette.primary};
  color: ${palette.highlight};
  padding: 4;
  margin-bottom: 8;
  text-align: center;
`;

const CenteredListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2;
`;

const Contact = () => {
  return (
    <StyledContact id="contact">
      <Heading as="h2" size="lg" mb="4" color={palette.accent}>
        Contato
      </Heading>
      <Text>
        Você pode entrar em contato comigo das seguintes maneiras:
      </Text>
      <List mt="4">
        <CenteredListItem>
          <ChakraLink href="mailto:juliano.amaral@icloud.com" color={palette.accent} display="flex" alignItems="center">
            <EmailIcon mr="2" /> juliano.amaral@icloud.com
          </ChakraLink>
        </CenteredListItem>
        <CenteredListItem>
          <ChakraLink href="https://github.com/JayGovinda13" target="_blank" color={palette.accent} display="flex" alignItems="center">
            <ExternalLinkIcon mr="1" /> https://github.com/JayGovinda13
          </ChakraLink>
        </CenteredListItem>
        <CenteredListItem>
          <ChakraLink href="https://wa.me/+5513997633229" target="_blank" color={palette.accent} display="flex" alignItems="center">
            <PhoneIcon mr="1" /> Clique para enviar uma mensagem
          </ChakraLink>
        </CenteredListItem>
        {/* Adicione outras informações de contato, como redes sociais, conforme necessário */}
      </List>
    </StyledContact>
  );
};

export default Contact;
