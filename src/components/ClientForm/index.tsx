import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import * as S from './styles';
import { ClientProps, CreateClientParams } from '@/types/clients';
import { useMutation } from '@tanstack/react-query';
import { createClient, updateClient } from '@/services/clients';
import { ActivityIndicator, Alert } from 'react-native';
import { maskFormat } from '@/utils/mask';

type Props = {
  isEdit?: boolean;
  clientOnEdit?: ClientProps;

  onSuccess?(): void;
  onError?(): void;
};

export function ClientForm({
  clientOnEdit,
  isEdit,
  onSuccess,
  onError,
}: Props) {
  const form = useForm({
    defaultValues: {
      ...clientOnEdit,
      salary: clientOnEdit?.salary
        ? maskFormat('money', clientOnEdit?.salary.toFixed(2))
        : undefined,
      companyValuation: clientOnEdit?.companyValuation
        ? maskFormat('money', clientOnEdit?.companyValuation.toFixed(2))
        : undefined,
    },
  });

  const isDisabled = !Object.values(form.watch()).every(Boolean);

  const createMutation = useMutation({
    mutationFn: createClient,
    mutationKey: ['create-client'],
    onSuccess() {
      Alert.alert('Cliente criado com sucesso!');
      if (onSuccess) onSuccess();
    },
    onError() {
      Alert.alert('Erro ao criar cliente');
      if (onError) onError();
    },
  });

  const updateMutation = useMutation({
    mutationKey: ['update-client'],
    mutationFn: (params: CreateClientParams) =>
      updateClient(clientOnEdit?.id || 0, params),
    onSuccess() {
      Alert.alert('Cliente atualizado com sucesso!');
      if (onSuccess) onSuccess();
    },
    onError() {
      Alert.alert('Erro ao atualizar cliente');
      if (onError) onError();
    },
  });

  const isLoading = updateMutation.isPending || createMutation.isPending;

  const onSubmit = form.handleSubmit((data) => {
    const formatted: CreateClientParams = {
      name: data.name || '',
      salary: Number(
        data.salary
          ?.replace('R$', '')
          .replaceAll(' ', '')
          .replaceAll('.', '')
          .replace(',', '.')
      ),
      companyValuation: Number(
        data.companyValuation
          ?.replace('R$', '')
          .replaceAll(' ', '')
          .replaceAll('.', '')
          .replace(',', '.')
      ),
    };

    if (isEdit) {
      updateMutation.mutate(formatted);
    } else {
      createMutation.mutate(formatted);
    }
  });

  return (
    <S.Container>
      <S.Title>{isEdit ? 'Editar' : 'Criar'} cliente</S.Title>
      <Input
        label='Nome'
        name='name'
        control={form.control}
        rules={{ required: 'Campo obrigatório' }}
        placeholder='Digite o nome:'
      />
      <Input
        label='Salário'
        name='salary'
        control={form.control}
        rules={{ required: 'Campo obrigatório' }}
        placeholder='Digite o salário:'
        mask='money'
      />
      <Input
        label='Valor da empresa'
        name='companyValuation'
        control={form.control}
        rules={{ required: 'Campo obrigatório' }}
        placeholder='Digite o valor da empresa:'
        mask='money'
      />
      <S.Button
        disabled={isDisabled || isLoading}
        activeOpacity={0.7}
        onPress={onSubmit}
      >
        <S.ButtonText>
          {isLoading ? (
            <ActivityIndicator color='#fff' />
          ) : (
            (isEdit ? 'Editar' : 'Criar') + ' cliente'
          )}
        </S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
