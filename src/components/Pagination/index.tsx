import React from 'react';

import pagination from '../../assets/pagination_01.png';

import {
  Container,
  PaginationBackground,
  PaginationText,
  PaginationButton,
  PaginationButtonText,
} from './styles';

const Pagination: React.FC = () => {
  return (
    <Container>
      <PaginationBackground source={pagination}>
        <PaginationText>
          Combo de uramakis a partir de R$ 8,90 com frete grátis!
        </PaginationText>
        <PaginationButton>
          <PaginationButtonText>Peça já</PaginationButtonText>
        </PaginationButton>
      </PaginationBackground>
    </Container>
  );
};

export default Pagination;
