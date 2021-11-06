import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import logoImg from '../../assets/tiny-owl.png';

export function Logo() {
  return (
    <Wrapper to={'/'}>
      <Image alt={'Tiny Owl Games Logo'} src={logoImg} />
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 72px;
  margin-top: 12px;
  pointer-events: none;
`;
