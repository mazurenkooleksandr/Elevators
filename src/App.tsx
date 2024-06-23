import { Box, Container, Heading } from 'theme-ui';

import { useSystemSettings } from '@/hooks';
import { Menu } from '@/components/Menu';
import { Text } from '@/components/Text';
import { Building } from '@/components/Building';
import { Header, Main } from './styles';

export const App = () => {
  const { buildings } = useSystemSettings().systemSettings;

  return (
    <Container bg='background'>
      <Box p={3} bg="primary">
        <Header>
          <Heading><Text id='header.title' /></Heading>
          <Menu />
        </Header>
      </Box>
      <Main>
        {Array.from({ length: buildings }).map((_, index) =>
          <Building key={index} />
        )}
      </Main>
    </Container>
  );
};
