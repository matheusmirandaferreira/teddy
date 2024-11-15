import { resize } from '@/utils/resize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  position: relative;
`;

export const DropdownButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  width: ${resize(50)};
  height: ${resize(25)};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ButtonText = styled.Text`
  font-size: ${resize(12)};
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.regular};
  `}
`;

export const OptionsList = styled.View`
  margin-top: 8px;
  border-radius: 8px;
  max-height: 200px;
  width: 60px;

  position: absolute;
  top: 90%;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
  `}
`;

export const OptionItem = styled.TouchableOpacity`
  padding: 12px 16px;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  color: #333;
`;
