import blockbaneLogo from 'app/assets/blockbane.png';
import styled from 'styled-components/macro';
import { Lead } from '../components/Lead';
import { P } from '../components/P';
import { SubTitle } from '../components/SubTitle';
import { Title } from '../components/Title';

export function Features() {
  return (
    <>
      <Title as="h2">Features</Title>
      <Lead>
        <strong>A Solo Developer Opertation</strong> passionate about building
        entertaining games
      </Lead>
      <List>
        <Feature>
          <AppIcon src={blockbaneLogo} />
          <Content>
            <SubTitle>Blockbane</SubTitle>
            <P>
              A chill twist to the classic puzzle matching genre. Blockbane lets
              users place puzzle pieces at their own pace to make square matches
              to keep the board clear.
              {/* <A
                href="https://redux.js.org/basics/usage-with-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </A>
              . Unidirectional data flow allows for change logging and time
              travel debugging.{' '}
              <A
                href="https://github.com/zalmoxisus/redux-devtools-extension"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Chrome Redux Dev Tools
              </A>{' '}
              to see how your application's state changes and travel in time to
              debug. Type any github username below and see it in action with
              Redux Dev Tools. */}
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
  margin: 6.25rem 0 6.25rem 2.25rem;

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
  margin: 24px;
`;
