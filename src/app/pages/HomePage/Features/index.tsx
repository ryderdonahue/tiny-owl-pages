import blockbaneLogo from 'app/assets/blockbane.png';
import AppStoreLogo from 'app/assets/app-store.png';
import GoogleStoreLogo from 'app/assets/google-play.png';
import styled from 'styled-components/macro';
import { Lead } from '../components/Lead';
import { P } from '../components/P';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';

export function Features() {
  return (
    <>
      <Lead>
        <strong>A Solo Developer Opertation</strong> passionate about building
        entertaining games
      </Lead>
      <Title as="h2">Games</Title>
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
            <div style={{ flexDirection: 'row' }}>
              <StoreLink
                target={'_blank'}
                href={'https://apps.apple.com/us/app/blockbane/id1499680263'}
              >
                <StoreIcon src={AppStoreLogo} />
              </StoreLink>
              <StoreLink
                href={
                  'https://play.google.com/store/apps/details?id=com.ryderdonahue.blockbane'
                }
                target={'_blank'}
              >
                <StoreIcon src={GoogleStoreLogo} />
              </StoreLink>
            </div>
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
`;

const AppIcon = styled.img`
  width: 92px;
  height: 92px;
  margin-right: 24px;
  pointer-events: none;
`;
const StoreIcon = styled.img`
  width: 203px;
  height: 60px;
  margin: 24px;
  &:hover {
    outline: 2px solid ${p => p.theme.primary};
  }

  border-radius: 2px;
`;

const StoreLink = styled.a``;
