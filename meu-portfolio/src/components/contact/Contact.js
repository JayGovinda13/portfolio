import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const palette = {
  primary: '#0F0F0F',
  secondary: '#232D3F',
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dados do e-mail
    const { name, email, message } = formData;

    // Enviar e-mail
    try {
      const response = await axios.post(
        'http://localhost:3001/send-email',
        { name, email, message },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);

      toast({
        title: 'Erro ao enviar e-mail',
        description: 'Verifique o console para mais detalhes.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledContact id="contact">
      <Heading as="h2" size="lg" mb="4" color={palette.accent}>
        Contato
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel htmlFor="name" color={palette.highlight}>
            Nome:
          </FormLabel>
          <Input
            type="text"
            id="name"
            placeholder="Seu Nome"
            onChange={handleChange}
            name="name"
            borderColor={palette.accent}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel htmlFor="email" color={palette.highlight}>
            E-mail:
          </FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Seu E-mail"
            onChange={handleChange}
            name="email"
            borderColor={palette.accent}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel htmlFor="message" color={palette.highlight}>
            Mensagem:
          </FormLabel>
          <Textarea
            id="message"
            placeholder="Sua Mensagem"
            onChange={handleChange}
            name="message"
            borderColor={palette.accent}
          />
        </FormControl>
        <Button
          type="submit"
          bgColor={palette.accent}
          color={palette.primary}
          _hover={{ bgColor: palette.highlight }}
        >
          Enviar
        </Button>
      </form>
    </StyledContact>
  );
};

export default Contact;
