import { useState } from 'react';

import { DrawerMenu } from '../DrawerMenu';

import { theme } from '@/styles/theme';
import { Feather } from '@expo/vector-icons';
import LogoImg from '@/assets/imgs/logo.png';

import * as S from './styles';

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('home');

  return (
    <>
      <S.Container>
        <S.Logo source={LogoImg} />
        <S.Button activeOpacity={0.8} onPress={() => setIsDrawerOpen(true)}>
          <Feather name='menu' size={24} color={theme.colors.darkGray} />
        </S.Button>
      </S.Container>

      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeRoute={activeRoute}
        onNavigate={setActiveRoute}
      />
    </>
  );
}
