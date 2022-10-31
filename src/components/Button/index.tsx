import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonText, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return(
    <Container 
      type={type} 
      {...rest}
    >
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}