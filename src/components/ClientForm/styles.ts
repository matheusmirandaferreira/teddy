import { resize } from '@/utils/resize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 32px 32px 64px;
  border-radius: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.medium};
    font-size: ${resize(18)};
    margin-bottom: 24px;
  `}
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${resize(48)};

  align-items: center;
  justify-content: center;

  border-radius: 8px;

  ${({ theme, disabled }) => css`
    background-color: ${theme.colors[disabled ? 'gray' : 'primary']};
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.medium};
    font-size: ${resize(16)};
    text-align: center;
  `}
`;
