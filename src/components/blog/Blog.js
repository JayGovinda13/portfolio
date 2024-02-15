import React, { useState, useEffect, } from 'react';
import { VStack, Heading, Box, Text, Link, Button } from '@chakra-ui/react';
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
                    Otimizando a Experiência do Usuário com o Novo Componente de Visualização de Certificados
                    </Heading>
                    <Text>Em minha jornada constante de aprendizado e desenvolvimento, sempre procuro maneiras de melhorar a experiência do usuário e a eficiência do meu trabalho. Recentemente, tive a oportunidade de implementar um novo componente no meu blog pessoal, o "CertificateViewer", que exibe uma coleção de certificados digitais e documentos PDF relevantes.

Este componente foi construído usando React, uma das tecnologias web mais populares para a criação de interfaces de usuário interativas. Para estilizar os componentes, optei por usar a biblioteca styled-components, que permite escrever CSS real diretamente no JavaScript, proporcionando maior controle e reutilização de estilos.

Além disso, integrei o Chakra UI, uma biblioteca de componentes acessíveis e modulares que segue as melhores práticas de design do sistema. Utilizei seus componentes básicos, como Box, Heading e Image, para criar uma interface limpa e responsiva.

Uma parte significativa da implementação foi a criação de uma paleta de cores personalizada, que foi aplicada consistentemente em todo o componente. Isso não só melhora a aparência geral, mas também contribui para uma experiência visual coesa e profissional.

Ao longo do processo, percebi a importância de otimizar o código para garantir que ele seja eficiente e fácil de manter. Assim, decidi remover props não utilizadas, usar URLs únicas como chaves para itens mapeados e adicionar atributos aria-label para melhorar a acessibilidade. Essas pequenas mudanças tinham um grande impacto na qualidade do código e na experiência do usuário.

Quanto ao resultado final, fiquei extremamente satisfeito. O componente não apenas cumpre sua função de apresentar os certificados de forma organizada, mas também oferece uma experiência visual agradável e funcional. A transição suave ao passar o mouse sobre os cartões de certificado adiciona um toque de sofisticação, enquanto a clareza e a simplicidade do design mantêm o foco no conteúdo.

A implementação deste componente foi um marco na minha evolução como desenvolvedor front-end. Foi gratificante ver como cada pequena otimização contribuía para um produto final mais robusto e acessível. Estou animado para continuar explorando novas técnicas e ferramentas que possam melhorar ainda mais a minha capacidade de criar soluções web eficazes e envolventes.

Se você também está interessado em desenvolvimento web e busca constantemente maneiras de aprimorar suas habilidades, sinta-se à vontade para seguir meu blog e compartilhar suas próprias experiências de codificação. Juntos, podemos continuar a construir uma comunidade de desenvolvedores dedicados e inspirados.</Text>
                </Box>
            </VStack>
        </StyledBlog>
    );
};

export default Blog;
