import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Image, Link } from '@chakra-ui/react';

const palette = {
  primary: '#0F0F0F',
  secondary: '#232D3F',
  accent: '#005B41',
  highlight: '#008170',
};

const StyledCertificateViewer = styled(Box)`
  background-color: ${palette.secondary};
  color: ${palette.highlight};
  padding: 4;
  margin-bottom: 8;
  text-align: center;
`;

const CertificateCard = styled(Box)`
  background-color: ${palette.primary};
  padding: 4;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

const CertificateImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const certificates = [
  { src: '/img/DesingnResponsivo.png', alt: 'Certificado 1' },
  { src: '/img/JavaScriptAlgorithms.png', alt: 'Certificado 2' },
  { src: '/img/BibliotecasFront.png', alt: 'Certificado 3' },
  { src: '/img/VisualizacaoDados.png', alt: 'Certificado 4' },
];

const pdfCertificates = {
  '/pdf/Certificado_ICL.pdf': 'ICL Membro Solidário',
};


const CertificateViewer = ({ imageUrl }) => (
  <StyledCertificateViewer id='certificados'>
    <Heading as="h2" size="lg" mb="4">
      Certificados
    </Heading>
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {certificates.map((certificate, index) => (
        <CertificateCard key={index} mt="4" maxW="400px" mx="auto">
          <CertificateImage src={certificate.src} alt={certificate.alt} />
        </CertificateCard>
      ))}
    </Box>
    <Box display="flex" justifyContent="center" mt="4">
      {Object.entries(pdfCertificates).map(([pdfUrl, alt]) => (
        <Link key={pdfUrl} href={pdfUrl} target="_blank" rel="noreferrer" mx="2">
          {alt}
        </Link>
      ))}
    </Box>
  </StyledCertificateViewer>
);

export default CertificateViewer;
