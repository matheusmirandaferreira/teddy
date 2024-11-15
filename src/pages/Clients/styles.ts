import { resize } from '@/utils/resize';
import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const Group = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  z-index: 1;
`;

export const Count = styled.Text`
  ${({ theme }) => css`
    font-size: ${resize(18)};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.semiBold};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${resize(18)};
    color: ${theme.colors.black};
    font-family: ${theme.fonts.regular};
  `}
`;

export const CardsWrapper = styled.View`
  gap: ${resize(20)};
  margin: ${resize(20)} 0;
`;

export const FooterSpacing = styled.View`
  height: 24px;
`;

export const OutlineButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    border-radius: 4px;
    background-color: transparent;
    border: 2px solid ${theme.colors.primary};

    height: ${resize(40)};
    align-items: center;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${resize(14)};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${resize(22)};
    font-family: ${theme.fonts.semiBold};
    text-align: center;
  `}
`;
