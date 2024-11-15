import { resize } from '@/utils/resize';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const screenHeight = Dimensions.get('screen').height;

export const DrawerContainer = styled.View<{ isOpen: boolean }>`
  position: absolute;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  top: 0;
  width: 80%;
  height: 100%;
  height: ${screenHeight}px;
  background-color: #a3a3a3;

  ${css`
    shadow-color: ${({ theme }) => theme.colors.black};
    shadow-offset: 0px 0px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
  `}
`;

export const LogoContainer = styled.View`
  width: 100%;
  height: 76px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: ${resize(90)};
  height: ${resize(40)};
  object-fit: contain;
`;

export const MenuItemsContainer = styled.View`
  padding: 20px;
  flex: 1;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MenuItem = styled.TouchableOpacity<{ isActive: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  border-right-width: 2px;
  border-right-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : 'transparent'};
  padding-left: 15px;
`;

export const MenuText = styled.Text<{ isActive: boolean }>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  margin-left: 15px;
`;

export const Overlay = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: ${screenHeight}px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Logout = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  padding-left: 15px;
`;

export const LogoutText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  color: red;
  margin-left: 15px;
`;
