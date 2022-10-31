import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonText, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  // handleClick?: () => void;
}

export function Button({ title, type = 'PRIMARY', /*handleClick**/  ...rest }: Props) {
  return(
    <Container 
      type={type}
      //onPress={() => handleClick}
      {...rest}
    >
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}