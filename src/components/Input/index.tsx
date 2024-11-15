import { Control, useController, RegisterOptions } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import * as S from './styles';
import { maskFormat } from '@/utils/mask';

interface InputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  name: string;
  control: Control<any>;
  label: string;
  rules?: RegisterOptions;
  mask?: 'money';
}

export function Input({
  name,
  control,
  label,
  defaultValue,
  rules,
  mask,
  ...rest
}: InputProps) {
  const {
    field: { value = '', onChange },
    fieldState: { error },
  } = useController({ name, control, defaultValue, rules });

  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.StyledTextInput
        value={mask ? maskFormat(mask, value) : value}
        onChangeText={(event) => {
          onChange(mask ? maskFormat(mask, event) : event);
        }}
        placeholderTextColor='rgba(255, 255, 255, 0.5)'
        {...rest}
      />
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.InputContainer>
  );
}
