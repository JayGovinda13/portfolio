import React, { useState, useEffect } from 'react';
import { VStack, Heading, Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import styled from 'styled-components';

const palette = {
    primary: '#0F0F0F',
    accent: '#005B41',
    highlight: '#008170',
};

const StyledBlog = styled(Box)`
  background-color: ${palette.primary};
  color: ${palette.highlight};
  padding: 4;
  margin-bottom: 8;
  text-align: center;
  height: 100%;
`;

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const author = "Juliano Amaral";

    useEffect(() => {
        axios.get(`http://localhost:5000/posts?author=${author}`)
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, [author]);

    return (
        <StyledBlog id="blog">
            <Heading as="h2" size="xl" mb="4" color={palette.highlight}>
                Últimas Postagens do Blog
            </Heading>
            <VStack spacing={4} align="stretch" mt="4">
                {posts.map(post => (
                    <Box key={post._id} p={4} borderWidth="1px" borderRadius="md">
                        <Heading as="h3" size="lg" mb={2}>
                            {post.title}
                        </Heading>
                        <Text>{post.content}</Text>
                    </Box>
                ))}
                <Box p={4} borderWidth="1px" borderRadius="md" borderColor={palette.accent}>
                    <Heading as="h3" size="lg" mb={2}>
                        A Aventura da Transição de Carreira 
                    </Heading>
                    <Text>Em um momento marcado por desafios, minha transição de carreira teve início em uma encruzilhada dolorosa, quando o fim de um relacionamento coincidiu com o término inesperado de minha carreira como professor de história. A sala de aula, que antes era meu palco para compartilhar conhecimento e inspirar mentes, de repente, tornou-se uma memória distante, deixando-me à deriva em um mar de incertezas.

A demissão trouxe consigo não apenas a perda profissional, mas também a necessidade premente de encontrar uma nova direção, uma nova esperança, já que muitas vezes me encontrei em contradições do que idealizer sobre dar aula e a realidade. Foi nesse período turbulento que iniciei minha jornada de transição, enfrentando o desafio monumental da reinvenção pessoal e profissional.

No meio desse vendaval de mudanças, encontrei conforto e inspiração em duas forças poderosas: a música junto a minha banda e a espiritualidade, especificamente minha conexão com a filosofia Hare Krsna. Compor e tocar com meus companheiros tornou-se um bálsamo para minha alma ferida, proporcionando alívio em meio ao caos. Cada nota e cada letra eram como faróis, guiando-me através das trevas da incerteza.

Minha fé na espiritualidade Hare Krsna desempenhou um papel crucial durante essa transição. Encontrar um propósito mais profundo e uma perspectiva espiritual ajudou-me a manter a compostura diante das adversidades. A prática da meditação e a imersão nos ensinamentos fortaleceram minha mente, oferecendo uma base sólida para enfrentar os desafios à frente.

A aprendizagem tornou-se um pilar fundamental nesse processo de transição. Investir tempo e esforço na aquisição de novas habilidades e conhecimentos abriu portas que antes pareciam seladas. Cada desafio de aprendizagem era uma oportunidade de crescimento, uma chance de me reinventar e progredir.

A verdadeira transformação, no entanto, começou quando adotei uma atitude mental positiva diante dos problemas. Em vez de me deixar afundar nas adversidades, optei por vê-las como trampolins para o sucesso. A mentalidade positiva não apenas me ajudou a superar as dificuldades, mas também a enxergar oportunidades onde outros viam obstáculos.

Hoje, olhando para trás, percebo que cada desafio que enfrento durante minha transição de carreira é uma peça fundamental na construção do meu novo caminho. A música e a espiritualidade são não apenas bengalas emocionais, mas alicerces que sustentaram minha jornada. A lição mais valiosa aprendida foi que, independentemente das circunstâncias, a atitude mental positiva é o farol que ilumina o caminho, transformando crises em oportunidades e derrotas em triunfos.

Minha transição de carreira não é apenas uma mudança profissional, mas uma jornada de autodescoberta e crescimento pessoal. Ao abraçar a positividade, a aprendizagem constante e a força da espiritualidade, provei para mim mesmo que, mesmo nas situações mais sombrias, podemos encontrar a luz que nos guiará para um futuro mais promissor.</Text>
                </Box>
            </VStack>
        </StyledBlog>
    );
};

export default Blog;
