import { resize } from '@/utils/resize';
import styled, { css } from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 4px;

  gap: ${resize(10)};

  ${css`
    elevation: 1;
    shadow-color: ${({ theme }) => theme.colors.black};
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
  `}
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${resize(16)};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const ValueText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${resize(14)};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const IconsContainer = styled.View`
  margin-top: 4px;

  gap: 24px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const RemoveButton = styled.TouchableOpacity`
  padding: 4px;
  width: 28px;
  margin-left: auto;
`;
