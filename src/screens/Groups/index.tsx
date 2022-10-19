import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight 
        title='Turmas' 
        subtitle='jogue com suas turmas'
      />

      <GroupCard title="Galera do Ignite"/>
    </Container>
  );
}

