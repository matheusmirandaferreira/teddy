import { useState } from 'react';
import * as S from './styles';

export function Welcome() {
  const [name, setName] = useState('');

  const handleEnter = () => {};

  return (
    <S.Container>
      <S.Header>Mobile</S.Header>
      <S.WelcomeText>Olá, seja bem-vindo!</S.WelcomeText>
      <S.Input
        placeholder='Digite o seu nome:'
        value={name}
        onChangeText={setName}
      />
      <S.Button onPress={handleEnter}>
        <S.ButtonText>Entrar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
