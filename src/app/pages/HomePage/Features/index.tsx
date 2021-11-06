import blockbaneLogo from 'app/assets/blockbane.png';
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
            <P>App store links coming soon</P>
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
  margin: 24px;
`;
