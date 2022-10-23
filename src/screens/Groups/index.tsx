import { useState } from 'react';
import { FlatList } from 'react-native';

import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { GroupCard } from '@components/GroupCard';
import { EmptyList } from '@components/EmptyList';

import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight 
        title='Turmas' 
        subtitle='jogue com suas turma'
      />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) =>  (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira turma?"/>
        )}
      />
      <Button 
        title="Criar uma nova turma"
      />
    </Container>
  );
}

