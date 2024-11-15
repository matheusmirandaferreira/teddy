import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons';

import { paths } from '@/routes';
import { theme } from '@/styles/theme';

import * as S from './styles';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  activeRoute: string;
  onNavigate: (route: string) => void;
};

export function DrawerMenu({
  isOpen,
  onClose,
  activeRoute,
  onNavigate,
}: DrawerProps) {
  const menuItems = [
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
      route: 'home',
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
    {
      icon: (
        <Ionicons
          name='grid'
          size={22}
          color={
            activeRoute === 'products'
              ? theme.colors.primary
              : theme.colors.black
          }
        />
      ),
      label: 'Produtos',
      route: 'products',
    },
  ];

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
                onNavigate(route);
                onClose();
              }}
            >
              {icon}
              <S.MenuText isActive={activeRoute === route}>{label}</S.MenuText>
            </S.MenuItem>
          ))}
        </S.MenuItemsContainer>
      </S.DrawerContainer>
    </>
  );
}
