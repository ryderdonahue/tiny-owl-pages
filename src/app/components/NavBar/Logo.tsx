import * as React from 'react';
import styled from 'styled-components/macro';
import logoImg from '../../assets/tiny-owl.png';

export function Logo() {
  return (
    <Wrapper href={'/'}>
      <Image alt={'Tiny Owl Games Logo'} src={logoImg} />
    </Wrapper>
  );
}

const Wrapper = styled.a`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 72px;
  margin-top: 12px;
  pointer-events: none;
`;
