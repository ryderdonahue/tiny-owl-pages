import styled from 'styled-components/macro';

export const Lead = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${p => p.theme.textSecondary};

  strong {
    color: ${p => p.theme.text};
  }
`;
