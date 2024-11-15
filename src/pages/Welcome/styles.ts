import styled, { css } from 'styled-components/native';
import { resize } from '../../utils/resize';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
`;

export const WelcomeText = styled.Text`
  margin-bottom: 20px;
  font-size: ${resize(32)};

  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regular};
  `}
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-bottom: 20px;
  border-width: 1px;
  border-radius: 4px;

  font-size: ${resize(24)};

  ${({ theme }) => css`
    border-color: ${theme.colors.border};
    font-family: ${theme.fonts.regular};
  `}
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`;

export const ButtonText = styled.Text`
  font-weight: 500;
  font-size: ${resize(24)};

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.semiBold};
  `}
`;
