import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  return(
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight 
          title="Nova turma"
          subtitle="Crie uma nova turma para adicionar as pessoas"
        />
        <Input />
        <Button 
          title="Criar"
          style={{marginTop: 20}}
        />
      </Content>
    </ Container>
  )
}