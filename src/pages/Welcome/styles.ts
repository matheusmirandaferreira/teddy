import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;

export const Header = styled.Text`
  font-size: 14px;
  color: #333333;
  margin-bottom: 40px;
`;

export const WelcomeText = styled.Text`
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-color: #cccccc;
  border-radius: 4px;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: #f15a24;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;
