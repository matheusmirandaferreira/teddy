import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 70px;
  width: 100%;
  padding: 18px 20px;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};

    border-bottom-width: 2px;
    border-color: ${theme.colors.black}20;
  `}
`;

export const Logo = styled.Image`
  width: 70px;
  height: 34px;
  object-fit: contain;
`;

export const Button = styled.TouchableOpacity``;
