import { ReactNode, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';

import { paths } from '@/routes';
import { theme } from '@/styles/theme';

import * as S from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps, PathsValues } from '@/types/common';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type MenuProps = {
  icon: ReactNode;
  label: string;
  route: PathsValues;
};

export function DrawerMenu({ isOpen, onClose }: DrawerProps) {
  const route = useRoute();
  const navigation = useNavigation<NavigationProps>();

  const activeRoute = route.name;

  const menuItems: MenuProps[] = [
    {
      icon: (
        <AntDesign
          name='home'
          size={24}
          color={
            activeRoute === 'home' ? theme.colors.primary : theme.colors.black
          }
        />
      ),
      label: 'Home',
      route: paths.welcome,
    },
    {
      icon: (
        <Octicons
          name='person'
          size={25}
          color={
            activeRoute === paths.clients
              ? theme.colors.primary
              : theme.colors.black
          }
        />
      ),
      label: 'Clientes',
      route: paths.clients,
    },
  ];

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate(paths.welcome);
  };

  useEffect(() => {
    if (!isOpen) return;

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        onClose();
        return true;
      }
    );

    return () => backHandler.remove();
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <S.Overlay activeOpacity={1} onPress={onClose} />
      <S.DrawerContainer isOpen={isOpen}>
        <S.LogoContainer>
          <S.Logo source={require('@/assets/imgs/logo.png')} />
        </S.LogoContainer>

        <S.MenuItemsContainer>
          {menuItems.map(({ icon, label, route }) => (
            <S.MenuItem
              key={route}
              isActive={activeRoute === route}
              onPress={() => {
                navigation.navigate(route);
                onClose();
              }}
            >
              {icon}
              <S.MenuText isActive={activeRoute === route}>{label}</S.MenuText>
            </S.MenuItem>
          ))}
          <S.Logout onPress={logout}>
            <Feather size={20} color='red' name='log-out' />
            <S.LogoutText>Sair</S.LogoutText>
          </S.Logout>
        </S.MenuItemsContainer>
      </S.DrawerContainer>
    </>
  );
}
