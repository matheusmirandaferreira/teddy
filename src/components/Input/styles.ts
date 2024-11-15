import { resize } from '@/utils/resize';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 16px;
  min-height: ${resize(70)};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8px;
`;

export const StyledTextInput = styled.TextInput`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 0 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 4px;
`;
