import { useCallback, useEffect, useState } from 'react';
import * as S from './styles';
import { theme } from '@/styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/types/common';
import { paths } from '@/routes';

export function Welcome() {
  const navigation = useNavigation<NavigationProps>();

  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const handleEnter = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem('@teddy:name', name);

      navigation.navigate(paths.clients);
    } catch (err: any) {
      Alert.alert('Ocorreu um erro ao salvar o nome', err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const checkStorage = useCallback(async () => {
    const storedName = await AsyncStorage.getItem('@teddy:name');

    if (storedName) {
      navigation.navigate(paths.clients);
    } else {
      setInitialLoading(false);
    }
  }, [navigation]);

  useEffect(() => {
    Promise.resolve(checkStorage());
  }, [checkStorage]);

  if (initialLoading) {
    return null;
  }

  return (
    <S.Container>
      <S.WelcomeText>Olá, seja bem-vindo!</S.WelcomeText>
      <S.Input
        placeholder='Digite o seu nome:'
        value={name}
        onChangeText={setName}
        placeholderTextColor={theme.colors.gray}
      />
      <S.Button onPress={handleEnter}>
        <S.ButtonText>
          {isLoading ? (
            <ActivityIndicator size='large' color='#fff' />
          ) : (
            'Entrar'
          )}
        </S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
