import blockbaneLogo from 'app/assets/blockbane.png';
import * as React from 'react';
import styled from 'styled-components/macro';
import { P } from '../components/P';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';

export function Features() {
  return (
    <>
      <Title as="h2">Support</Title>
      <List>
        <Feature>
          <AppIcon src={blockbaneLogo} />
          <Content>
            <SubTitle>Blockbane</SubTitle>
            <P>
              A chill twist to the classic puzzle matching genre. Blockbane lets
              users place puzzle pieces at their own pace to make square matches
              to keep the board clear.
            </P>
            <P>
              <strong>Need help?</strong>{' '}
              <Link
                href={
                  'mailto:tinyowlgamescontact@gmail.com?subject=Blockbane%20Support'
                }
              >
                Contact support via email
              </Link>
              <Link href={'https://discord.gg/RSvUKUD'}>
                Or get in touch on Discord!
              </Link>
            </P>
          </Content>
        </Feature>
      </List>
    </>
  );
}

const Feature = styled.li`
  display: flex;
  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;

const AppIcon = styled.img`
  width: 92px;
  height: 92px;
  margin-right: 24px;
  pointer-events: none;
`;

const Link = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
